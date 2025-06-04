import { Container, Button } from "react-bootstrap";

function NotFoundPage() {
    return (
        <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
            <h1
                style={{
                    fontSize: "6rem",
                    fontWeight: "bold",
                    color: "#343a40",
                }}
            >
                404
            </h1>
            <h2 className="mb-3" style={{ fontSize: "2rem", color: "#6c757d" }}>
                Page Not Found
            </h2>
            <p className="text-muted mb-4">
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Button href="/" variant="primary" size="lg">
                Go Back Home
            </Button>
        </Container>
    );
}

export default NotFoundPage;
