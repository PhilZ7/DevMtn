/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

var gitDefinition = 'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

var gitHubDefition = 'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.';

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
  description: 'initialize a local repository right here in this folder',
  code: 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const close = {
  description: 'copy a repo from Github and put it on my machine',
  code: 'git clone REPO_URL'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
  description: 'tell me about this repo',
  code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
  description: 'add some files to be tracked (always!)',
  code: 'git add'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit = {
  description: `create a snapshot of the files I'm tracking`,
  code: 'git commit'
}


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
  description: 'put my local commits on Github',
  code: 'git push REPO_NAME'
}

/// BONUS FUNCTION /// 

function printCheats() {
  console.log(` 
                       ____________                      
        dGGGGMMb     ,"""""""""""""".
       @p~qp~~qMb    | Git Rules! |
       M|@||@) M|   _;..............'
       @,----.JM| -'
      JS [__]  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\dS"qML
 |    .       | ' \Zq
_)      \.___.,|     .'
\____   )MMMMMM|   .'
     -'       --' `)
  console.log(`${gitDefinition} 


  ${gitHubDefition}


  Use this command:${init.code} 
  To achieve: ${init.description}

  Use this command:${close.code} 
  To achieve: ${close.description}

  Use this command:${status.code} 
  To achieve: ${status.description}

  Use this command:${add.code} 
  To achieve: ${add.description}

  Use this command:${commit.code} 
  To achieve: ${commit.description}

  Use this command:${push.code} 
  To achieve: ${push.description}

  `);
}

printCheats();