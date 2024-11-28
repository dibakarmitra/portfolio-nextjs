import BaseService from './BaseService';
import { getAllPosts, getPostBySlug, NotePost } from '../lib/notes';

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
