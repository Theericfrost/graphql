import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "./assets/queries";
import { DELETE_PROJECT } from "./assets/mutations";
import AddProject from './components/AddProject'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="container">
      <div className="d-flex w-100">
        <h1>Projects</h1>
        <div className="ms-auto">
          <AddProject/>
        </div>
      </div>
      {loading && <div>loading....</div>}
      {error && <div>smt went wrong</div>}
      {data && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.projects.map(({ name, description, status, id }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteProject({
                        variables: { id },
                      })
                    }
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Projects;
