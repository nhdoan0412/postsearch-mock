const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

async function searchPosts(query) {
    const [postsRes, usersRes] = await Promise.all([
        fetch(POST_URL),
        fetch(USERS_URL)
    ]);

    if (!postsRes.ok || !usersRes.ok) {
        throw new Error("Failed to fetch");
    }

    const posts = await postsRes.json();
    const users = await usersRes.json();

    const userMap = new Map();

    // normalize search query
    const terms = query
        .toLowerCase()
        .split();

    const results = [];

    for (const post of posts) {
        const author = userMap.get(post.userId);
        const title = post.title.toLowerCase();
        const body = post.body.toLowerCase();

        let score = 0;

        for (const term of terms) {
            for (const term of terms) {
                if (authorName.includes(term)) {
                    score += 3;
                }
                if (title.includes(term)) {
                    score += 2;
                }
                if (body.includes(term)) {
                    score += 1;
                }
            }
        }

        if (score > 0) {
            // push the post,author,and score into results
        }
    }

        results.sort((a, b) => b.score - a.score);

    return results;
}


//text = "abcdef"
// term = "cde"


// function contains(text, term) {
//     if (term.length > text.length) {
//         return false; 
//     }

//     for (let i=0; i<= text.length - term.length, i++) {
//         let matched = true 

//         for (let j = 0, j < term.length, j++){
//             if (text[i+1] != term[j]){
//                 matched = false;
//                 break;
//             }
//         }

//         if (matched) {
//             return true; 
//         }

//     }


// }

//text = "abcdef"
// term = "cde"