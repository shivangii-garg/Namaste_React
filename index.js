// <!-- Using JS -->
//         let element = document.createElement("h1");
//         element.innerHTML = "Namaste from JavaScript";
//         let root = document.getElementById("root");
//             root.appendChild(element);

// <!-- Using React -->

//     let element = React.createElement("h1", {}, "Namaste from React");
//     let root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(element);

// <!-- Nested tags using React -->

let element1 = React.createElement("h1", {id: "title1"}, "Heading1" )
let element2 = React.createElement("h1", {id: "title2"}, "Heading2" )
let container = React.createElement("div", {id: "container"}, [element1,element2] )
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)