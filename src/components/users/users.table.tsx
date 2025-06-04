import { useEffect } from "react";
import Table from "react-bootstrap/Table";

const UsersTable = () => {
    const access_token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjgzZmI3OTFjYzFlMDFlZTk0YTc2MjU2IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsIm5hbWUiOiJBZG1pbiIsInR5cGUiOiJTWVNURU0iLCJyb2xlIjoiQURNSU4iLCJnZW5kZXIiOiJNQUxFIiwiYWdlIjo2OSwiaWF0IjoxNzQ5MDA2MjQ4LCJleHAiOjE4MzU0MDYyNDh9.pwS1dqvvItmZXZkRoEM7UaFdshdEHFIF_Nd_DcZgtq8";

    const getData = async () => {
        const res = await fetch("http://localhost:8000/api/v1/users/all", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        });

        const data = await res.json();

        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default UsersTable;
