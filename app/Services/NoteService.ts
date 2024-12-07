import BaseService from './BaseService';
import { NotePost } from '@/types/notes';
import { getAllPosts, getPostBySlug } from '../lib/notes';

export default class NoteService extends BaseService {
    async getAllPosts(): Promise<NotePost[]> {
        try {
            return getAllPosts();
        } catch (error) {
            return this.handleError(error);
        }
    }

    async getPostBySlug(slug: string): Promise<NotePost | null> {
        try {
            return getPostBySlug(slug);
        } catch (error) {
            return null;
        }
    }
}
