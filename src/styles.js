const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '400px',
        borderRadius: '8px',
        objectFit: 'contain',
    },

    title: {
        fontSize: '1.2rem',
        margin: '8px 0',
        textAlign: 'center',
    },

    description: {
        fontSize: '0.9rem',
        color: '#555',
        textAlign: 'center',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
    },

    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '16px',
        width: '100%',
    },

    likeButton: {
        backgroundColor: '#fff',
        color: '#888',
        border: '1px solid #ddd',
        borderRadius: '50px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.3s, transform 0.3s',
    },

    liked: {
        backgroundColor: '#ff4d4d',
        color: '#fff',
    },

    heartIcon: {
        marginRight: '8px',
        fontSize: '1.2rem',
        transition: 'transform 0.3s',
    },

    heartIconLiked: {
        transform: 'scale(1.2)',
        color: '#fff',
    },

    likeCount: {
        marginLeft: '10px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#ff4d4d',
    },

    list: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        padding: '16px',
    },
};

export {styles};