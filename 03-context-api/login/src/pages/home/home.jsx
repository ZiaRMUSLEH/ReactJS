import { useContext } from "react";
import { StoreContext } from "../../context/store";

const HomePage = () => {
    //  TODO: Show user information, and add protected routes
    const { state } = useContext(StoreContext);

    // email: "atuny0@sohu.com";
    // firstName: "Terry";
    // gender: "male";
    // id: 1;
    // image: "https://robohash.org/hicveldicta.png";
    // lastName: "Medhurst";
    // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTcwMTUzMDg2OSwiZXhwIjoxNzAxNTM0NDY5fQ.AQ4ISCbwDgN9BTi6hia0CwLsbfdbtzv8JZt6wUBucwM";
    // username: "atuny0";

    const { user } = state;
    console.log(user);

    return (
        <div>
            <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}'s Profile Picture`}
                title={`${user.firstName} ${user.lastName}`}
                style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                }}
            />
            <h3>
                {user.firstName} {user.lastName}
            </h3>
        </div>
    );
};

export default HomePage;
