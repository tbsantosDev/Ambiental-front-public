import { Spinner } from "reactstrap";

const PageSpinner = function () {
    return <>
        <div className="vh-100 bg-dark d-flex justify-content-center align-items-center">
            <Spinner animition="border" color="light"></Spinner>
        </div>
    </>
}

export default PageSpinner