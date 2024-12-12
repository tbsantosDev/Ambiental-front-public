import styles from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import axios from "axios";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import moment from "moment";
import "moment/locale/pt-br";
import { Container } from "reactstrap";
import { usePagination } from "@table-library/react-table-library/pagination";



type dtrpLwartType = {
  id: number;
  company: string;
  description: string
  term: number;
  dueDate: string;
  comments: string;
}

moment.locale();

export default function DtrpLwartTable() {
  // ------------ States -----------------
  const [data, setData] = useState({ nodes: [] });
  const [search, setSearch] = useState("");
  const theme = useTheme(getTheme());


  // ------------ Requisição -----------------
  const fetchData = useCallback(async () => {
    const token = sessionStorage.getItem("trevoambiental-token")
    const url = `${process.env.NEXT_PUBLIC_BASEURL}/dtrplwart`;
    const result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData({ nodes: result.data });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
    



  // ------------ Features -----------------

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const resize = { resizerHighlight: "#0000", resizerWidth: 2 };

  const pagination = usePagination(
    data,
    {
      state: {
        page: 0,
        size: 10,
      },
    },
    {
      isServer: false,
    }
  );


  // ------------ Constantes-----------------

  const dataTable = {
    nodes: data.nodes.filter((item: dtrpLwartType) =>
      item.company.toLowerCase().includes(search.toLowerCase())
    ),
  };


  return (
    <Container>
      <label className={styles.label} htmlFor="search">
        Procurar por empresa:
        <input
          className={styles.input}
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </label>

      <Table data={dataTable} theme={theme} pagination={pagination}>
        {(tableList: []) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell resize={resize}>Empresa</HeaderCell>
                <HeaderCell resize={resize}>Descrição</HeaderCell>
                <HeaderCell resize={resize}>Prazo</HeaderCell>
                <HeaderCell resize={resize}>Data de vencimento</HeaderCell>
                <HeaderCell resize={resize}>Observações</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item: dtrpLwartType) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.company}</Cell>
                  <Cell>{item.description}</Cell>
                  <Cell>{item.term}</Cell>
                  <Cell>{moment(item.dueDate).format("L")}</Cell>
                  <Cell>{item.comments}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>

      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>
          Total de páginas: {pagination.state.getTotalPages(data.nodes)}
        </span>

        <span>
          página:{' '}
          {pagination.state.getPages(data.nodes).map((_: any, index: number) => (
            <button className={styles.buttonPagination}
              key={index}
              type="button"
              style={{
                fontWeight:
                  pagination.state.page === index
                    ? 'bold'
                    : 'normal',
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </span>
      </div>
    </Container>
  );
}
