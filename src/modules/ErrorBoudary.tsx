import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Alert } from 'antd';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Error:', error, errorInfo);
  }

  public render() {
    // console.log('rerender ERR');
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return (
        <Alert style={{ height: 50 }} type="error" message="OOPS... there was an error" banner />
      );
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

export default ErrorBoundary;
