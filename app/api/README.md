# Portfolio APIs

## Notes API
- **GET /api/notes**: 
  - Retrieve all notes with pagination
  - Retrieve a specific note by slug or ID
  - Query Parameters:
    - `page`: Page number for pagination (default: 1)
    - `limit`: Number of notes per page (default: 10)
    - `slug`: Retrieve a note by its unique slug
    - `id`: Retrieve a note by its unique identifier

### Notes API - Example Requests
```bash
# Get all notes (first page)
curl "/api/notes"

# Get notes with pagination
curl "/api/notes?page=2&limit=5"

# Get a specific note by slug
curl "/api/notes?slug=web-security-best-practices"

# Get a specific note by ID
curl "/api/notes?id=290c3845-a865-5d32-8d6a-aa7635dec10e"
```

### Notes API - Response Examples
#### All Notes Response
```json
{
  "posts": [
    {
      "id": "290c3845-a865-5d32-8d6a-aa7635dec10e",
      "slug": "web-security-best-practices",
      "title": "Web Security Best Practices",
      "date": "2024-10-25",
      "excerpt": "Essential security practices for web applications",
      "tags": ["Security", "Web Development"],
      "content": "Markdown content of the note..."
    }
  ],
  "pagination": {
    "totalPosts": 15,
    "totalPages": 3,
    "currentPage": 1,
    "pageSize": 5
  }
}
```

#### Single Note Response
```json
{
  "id": "290c3845-a865-5d32-8d6a-aa7635dec10e",
  "slug": "web-security-best-practices",
  "title": "Web Security Best Practices",
  "date": "2024-10-25",
  "excerpt": "Essential security practices for web applications",
  "tags": ["Security", "Web Development"],
  "content": "Markdown content of the note..."
}
```

## Projects API
- **GET /api/projects**: Retrieve all projects or a specific project
- **POST /api/projects**: Create a new project (Planned)
- **DELETE /api/projects**: Delete a project (Planned)

### Projects API - Example Requests
```bash
# Get all projects (first page)
curl "/api/projects"

# Get projects with pagination
curl "/api/projects?page=2&limit=5"

# Get a specific project by slug
curl "/api/projects?slug=portfolio-website"

# Get a specific project by ID
curl "/api/projects?id=unique-project-id"

# Create a new project
curl -X POST "/api/projects" -H "Content-Type: application/json" -d '{"title": "New Project", "description": "Description of the new project", "technologies": ["React", "Node.js"], "githubLink": "https://github.com/username/new-project", "liveLink": "https://new-project.com"}'

# Delete a project
curl -X DELETE "/api/projects?id=unique-project-id"
```

### Projects API - Response Examples
#### All Projects Response
```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "slug": "portfolio-website",
      "title": "Personal Portfolio Website",
      "date": "2024-01-15",
      "description": "Modern, responsive portfolio showcasing projects and skills",
      "technologies": ["Next.js", "TypeScript", "Tailwind CSS"],
      "githubLink": "https://github.com/username/portfolio",
      "liveLink": "https://yourportfolio.com"
    }
  ],
  "pagination": {
    "totalProjects": 10,
    "totalPages": 2,
    "currentPage": 1,
    "pageSize": 5
  }
}
```

#### Single Project Response
```json
{
  "id": "unique-project-id",
  "slug": "portfolio-website",
  "title": "Personal Portfolio Website",
  "date": "2024-01-15",
  "description": "Modern, responsive portfolio showcasing projects and skills",
  "technologies": ["Next.js", "TypeScript", "Tailwind CSS"],
  "githubLink": "https://github.com/username/portfolio",
  "liveLink": "https://yourportfolio.com",
  "content": "Detailed markdown description of the project..."
}
```

## Photos API
- **GET /api/photos**: Retrieve all photos or a specific photo
- **POST /api/photos**: Upload a new photo (Planned)
- **DELETE /api/photos**: Delete a photo (Planned)

### Photos API - Example Requests
```bash
# Get all photos (first page)
curl "/api/photos"

# Get photos with pagination
curl "/api/photos?page=2&limit=5"

# Get a specific photo by slug
curl "/api/photos?slug=sunset-landscape"

# Get a specific photo by ID
curl "/api/photos?id=unique-photo-id"

# Upload a new photo
curl -X POST "/api/photos" -H "Content-Type: application/json" -d '{"title": "New Photo", "description": "Description of the new photo", "tags": ["Landscape", "Nature"], "url": "/images/new-photo.jpg", "location": "Mountain Range, California"}'

# Delete a photo
curl -X DELETE "/api/photos?id=unique-photo-id"
```

### Photos API - Response Examples
#### All Photos Response
```json
{
  "photos": [
    {
      "id": "unique-photo-id",
      "slug": "sunset-landscape",
      "title": "Golden Sunset Landscape",
      "date": "2024-02-10",
      "description": "Breathtaking sunset over mountain range",
      "tags": ["Landscape", "Nature", "Sunset"],
      "url": "/images/sunset-landscape.jpg",
      "location": "Mountain Range, California"
    }
  ],
  "pagination": {
    "totalPhotos": 15,
    "totalPages": 3,
    "currentPage": 1,
    "pageSize": 5
  }
}
```

#### Single Photo Response
```json
{
  "id": "unique-photo-id",
  "slug": "sunset-landscape",
  "title": "Golden Sunset Landscape",
  "date": "2024-02-10",
  "description": "Breathtaking sunset over mountain range",
  "tags": ["Landscape", "Nature", "Sunset"],
  "url": "/images/sunset-landscape.jpg",
  "location": "Mountain Range, California",
  "exifData": {
    "camera": "Canon EOS R",
    "lens": "24-70mm f/2.8",
    "aperture": "f/8",
    "shutterSpeed": "1/250",
    "iso": 100
  }
}
```

## Implementation Notes
- Current implementation uses in-memory data storage
- Pagination supported for all APIs
- Flexible querying by slug or ID
- To be expanded with:
  - Database integration
  - Authentication
  - Comprehensive validation
  - More robust error handling

## Future Improvements
- Implement proper database connections
- Add authentication middleware
- Create comprehensive input validation
- Implement more advanced filtering and search capabilities
- Add comprehensive error responses
- Support for creating, updating, and deleting resources
