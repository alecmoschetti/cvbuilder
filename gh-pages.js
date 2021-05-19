var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/alecmoschetti/cvbuilder', // Update to point to your repository  
        user: {
            name: 'Alec Moschetti', // update to use your name
            email: 'alecmoschetti@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)