
const posts = [
    {title :'Post one', body: 'this is post one'},
    {title :'Post two', body: 'this is post two'}
];


function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li> ${post.title} - Last updated ${new Date()}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            posts.push(post);
            resolve();            
        },2000);
    
    })

    }


getPosts();

createPost({title :'Post three', body: 'this is post three'}).then(()=>{
    getPosts();
});

//things become so clear

//Promis.all

const promise01 = Promise.resolve('Hello Worls');
const promise02 = 10;
const promise03 = new Promise((resolve,reject) =>{
    setTimeout(resolve,2000,'Goodbye')
}
);

const promise04 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise01,promise02,promise03,promise04]).then((values => console.log(values)));












