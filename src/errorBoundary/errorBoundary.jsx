import React from "react";
import "./errorBoundary.scss";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    // Update state when error happens
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // Optional: Log error details
    componentDidCatch(error, errorInfo) {
        console.log("Error:", error);
        console.log("Error Info:", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={`error-boundary-wrapper`}>
                    <div className={`header-1`}>Something went wrong.</div>
                    <div className={`header-2`}>Please try again later.</div>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
