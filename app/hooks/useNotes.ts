import { useState, useEffect } from 'react';
import { NotePost } from '@/types/notes';
import { getAllPosts, getPostBySlug } from '../lib/notes';

export function useNotes() {
    const [posts, setPosts] = useState<NotePost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getAllPosts();
            setPosts(fetchedPosts);
        };
        fetchPosts();
    }, []);

    const getPostBySlug = (slug: string): NotePost | undefined => {
        return posts.find(post => post.slug === slug);
    };

    return {
        posts,
        getPostBySlug
    };
}
