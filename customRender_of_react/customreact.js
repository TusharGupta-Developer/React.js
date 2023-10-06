
function customReact(reactElelment, contaioner) {
    /*
    const domElement = document.createElement(reactElelment.type);
    domElement.innerHTML = reactElelment.children;
    domElement.setAttribute('href', reactElelment.props.href);
    domElement.setAttribute('target',reactElelment.props.target);
    
    contaioner.appendChild(domElement)
    */

    const domElement = document.createElement(reactElelment.type);
    domElement.innerHTML = reactElelment.children;

    for (const prop in reactElelment.props) {
        console.log(prop);
        if(prop === 'children') continue;//when prop is equal to 'children', the continue statement is triggered, and the loop immediately moves to the next iteration without executing the code that follows it in the loop block. 
        domElement.setAttribute(prop, reactElelment.props[prop])


    }
    contaioner.appendChild(domElement)
}


const reactElelment = {
    type: 'a',
    props: {
        href: 'https:/google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customReact(reactElelment, mainContainer);



