import { useMutation, useQuery } from "@apollo/client";
import AddClient from "./components/AddClient";
import { GET_CLIENTS } from "./assets/queries";
import { DELETE_CLIENT } from "./assets/mutations";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({
    //     query: GET_CLIENTS,
    //   });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <div className="container">
      <div className="d-flex w-100">
        <h1>Clients</h1>
        <div className="ms-auto">
          <AddClient />
        </div>
      </div>
      {loading && <div>loading....</div>}
      {error && <div>smt went wrong</div>}
      {data && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.clients.map(({ name, email, phone, id }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteClient({
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

export default Clients;
