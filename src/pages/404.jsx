import { useTitle } from "../hooks/useTitle";

function PageNotFound() {
  useTitle("Not Found");
  return <div>PageNotFound</div>;
}

export default PageNotFound;
