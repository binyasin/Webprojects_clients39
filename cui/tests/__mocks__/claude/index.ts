// Mock Claude CLI for integration tests
export const mockClaudeResponse = (response: string) => {
  return { output: response, exitCode: 0 };
};
