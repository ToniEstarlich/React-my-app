
export const fetchUser = async (): Promise<User> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();

    return {
        name: data.name,
        email: data.email
    };
};
