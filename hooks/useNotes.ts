"use client";

import { useState, useEffect } from 'react';
import { NotePost } from '@/types/notes';
import { getNotePosts } from '../lib/posts';

export function useNotes() {
    const [posts, setPosts] = useState<NotePost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getNotePosts();
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
