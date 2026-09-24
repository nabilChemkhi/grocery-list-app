// const user= ([{name, age}]) => {
//   return { name, age };
// }

// myUser = { name: "Alice", age: 30 };    
// user(myUser); // { name: "Alice", age: 30 }



async function fetchUsers() {
    const API_URL = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const users = await response.json();
    console.log(`${users.length} users loaded!`);
    console.log(users[0]);
    return users;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

fetchUsers();

async function saveUser(user){
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const savedUser = await response.json();
        console.log("User saved:", savedUser);
        return savedUser;
    } catch (error) {
        console.error("Save failed:", error);
    }
}

saveUser({ name: "Bill", email: "bill@example.com" });