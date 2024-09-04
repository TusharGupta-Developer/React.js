function customrender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    domElement.textContent = reactElement.children; // Use textContent instead of innerHTML

    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
};

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: "_blank"
    },
    children: "Click to google"
}

const maincontainer = document.querySelector("#root")
 


customrender(reactElement, maincontainer)