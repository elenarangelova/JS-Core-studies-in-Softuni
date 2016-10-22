/**
 * You will be given a register of systems with components and subcomponents. You need to build an ordered database
 * of all the elements that have been given to you.
 The elements are registered in a very simple way. When you have processed all of the input data, you must print them
 in a specific order. For every System you must print its components in a specified order, and for every Component,
 you must print its Subcomponents in a specified order.
 The Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria, and by
 alphabetical order as second criteria. The Components must be ordered by amount of Subcomponents, in descending order.
 The input comes as array of strings. Each element holds data about a system, a component in that system, and a
 subcomponent in that component. If the given system already exists, you should just add the new component to it.
 If even the component exists, you should just add the new subcomponent to it. The subcomponents will always be unique.
 The input format is:
 “{systemName} | {componentName} | {subcomponentName}”
 All of the elements are strings, and can contain any ASCII character. The string comparison for the alphabetical
 order is case-insensitive.
 As output you need to print all of the elements, ordered exactly in the way specified above. The format is:
 “{systemName}
 |||{componentName}
 |||{component2Name}
 ||||||{subcomponentName}
 ||||||{subcomponent2Name}
 {system2Name}
 ...”

 */
function sortComponents(input) {
    let database = new Map();

    for (let line of input) {
        [system, component, subcomp] = line.split(' | ');


        if (!database.has(system)) {
            database.set(system, new Map());
        }
        if (!(database.get(system).has(component))) {
            database.get(system).set(component, [])
        }
        database.get(system).get(component).push(subcomp);
    }

    let sortedData = [...database].sort((e1, e2) => sortAlphabetical(e1, e2)).sort((e1, e2) => sortByComponents(e1, e2))

    // PRINT
    for (let system of sortedData) {
        console.log(system[[0]]);
        let sortedComponents = [...system[1]].sort((e1, e2) => sortByComponents(e1, e2));
        for (let component of sortedComponents) {
            console.log('|||' + component[0]);
            for (let subComponent of component[1]) {

                console.log('||||||' + subComponent);
            }
        }
    }

    function sortByComponents(sys1, sys2) {
        let a = [...sys1[1]].length;
        let b = [...sys2[1]].length;
        return b - a
    }

    function sortAlphabetical(e1, e2) {
        let a = e1[0];
        let b = e2[0];

        return a.localeCompare(b)
    }

}

sortComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session1 | Default Security',
    'Indice | Session1 | Default Security',


])
