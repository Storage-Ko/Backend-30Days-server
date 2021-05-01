module.exports = {
    apps: [{
        name: '30Days',
        script: 'dist/main.js',
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'Backend-30Days-server'
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '122.34.166.121',
            ref: 'origin/master',
            repo: 'https://github.com/Ko-GyeongTae/Backend-30Days-server.git',
            path: '/home/ko/Document/Backend-30Days-server',
            'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env production'
        }
    }
};