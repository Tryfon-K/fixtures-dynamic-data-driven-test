export type LoginExpectation =
    | 'success'
    | 'failureWrongUsername'
    | 'failureWrongPassword';


export type LoginTestData = {
    name: string;
    username: string;
    password: string;
    runTest: string | boolean;
    expect: LoginExpectation;
};