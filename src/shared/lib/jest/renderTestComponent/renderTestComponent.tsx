import React, {ReactNode} from 'react';
import {MemoryRouter} from "react-router";
import {ThemeProvider} from "@/app/providers/ThemeProvider/ThemeProvider";
import {render} from "@testing-library/react";
import {StoreProvider} from "@/app/providers/StoreProvider/StoreProvider";
import {StateSchema} from "@/app/providers/StoreProvider/StateSchema";

interface TestComponentOptions {
  initialState?: Partial<StateSchema>
}

interface TestComponentProps {
  children?: React.ReactNode;
  initialState?: Partial<StateSchema>
}

const TestComponent = ({children, initialState}: TestComponentProps) => {
  return (
    <MemoryRouter>
      <StoreProvider initialState={initialState}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export const renderTestComponent = (children: ReactNode, options: TestComponentOptions = {}) => {
  return render(
    <TestComponent initialState={options.initialState}>
      {children}
    </TestComponent>
  )
}