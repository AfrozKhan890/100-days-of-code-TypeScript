// Question 37: Large Shirts: Default values in `make_shirt()`.

function make_shirt(size = 'medium', message = 'Coding is not easy'){
    console.log(`\nMaking a ${size} size t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default size and message 
make_shirt('small'); // Size is changed but message is default
make_shirt(undefined, 'I love Coding'); // Size is default but message is customized
make_shirt('large','I love Coding'); // Message and Size both are customized    
    