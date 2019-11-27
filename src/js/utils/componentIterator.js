require('mutationobserver-shim'); // Polyfill for IE10

export function runPulitoFractalThemeComponent(node) {
    const name = node.getAttribute('data-pulito-module');
    window.PulitoFractalTheme[name].init(node);
}

export function componentIterator() {
    const elements = document.querySelectorAll('[data-pulito-module]');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        runPulitoFractalThemeComponent(element);
    }
}

// Public function
export function listenForDynamicComponents() {
    // Create the observer
    const observer = new MutationObserver((mutations) => {
        // Loop each mutation
        for (let i = 0; i < mutations.length; i++) {
            const mutation = mutations[i];

            // Check the mutation has added nodes
            if (mutation.addedNodes.length > 0) {
                const newNodes = mutation.addedNodes;

                // Loop though each of the added nodes
                for (let j = 0; j < newNodes.length; j++) {
                    const node = newNodes[j];

                    // Check if current node is a component
                    if (node.nodeType === 1 && node.hasAttribute('data-pulito-module')) {
                        runPulitoFractalThemeComponent(node);
                    }

                    // Loop though the children of each of the added nodes
                    for (let k = 0; k < node.childNodes.length; k++) {
                        const childNode = node.childNodes[k];

                        // Check if current child node is a compoennt
                        if (childNode.nodeType === 1 && childNode.hasAttribute('data-pulito-module')) {
                            runPulitoFractalThemeComponent(childNode);
                        }
                    }
                }
            }
        }
    });

    // Get all nodes within body
    const bodyNodes = document.body.childNodes;

    // Loop though all child nodes of body
    for (let i = 0; i < bodyNodes.length; i++) {
        const node = bodyNodes[i];

        // Observe on each child node of body
        observer.observe(node, {
            attributes: false,
            characterData: false,
            childList: true,
            subtree: true,
            attributeOldValue: false,
            characterDataOldValue: false
        });
    }
}
