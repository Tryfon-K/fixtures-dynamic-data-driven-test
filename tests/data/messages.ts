export type Messages = Record<string, Record<string, string>>;

export const messages = {
    login: {
        success: 'You logged into a secure area!',
        wrongUsernameFailure: 'Your username is invalid!',
        wrongPasswordFailure: 'Your password is invalid!',
    },
} satisfies Messages;
