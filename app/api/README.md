# Portfolio APIs

## Notes API
- **GET /api/notes**: Retrieve all notes or a specific note by ID
- **POST /api/notes**: Create a new note
- **DELETE /api/notes?id=`: Delete a note by ID

### Example Requests
```bash
# Get all notes
curl /api/notes

# Get a specific note
curl /api/notes?id=1

# Create a note
curl -X POST /api/notes 
  -H "Content-Type: application/json" 
  -d '{"title":"New Note", "content":"Note content"}'

# Delete a note
curl -X DELETE /api/notes?id=1
```

## Projects API
- **GET /api/projects**: Retrieve all projects or a specific project by ID
- **POST /api/projects**: Create a new project
- **DELETE /api/projects?id=`: Delete a project by ID

### Example Requests
```bash
# Get all projects
curl /api/projects

# Get a specific project
curl /api/projects?id=1

# Create a project
curl -X POST /api/projects 
  -H "Content-Type: application/json" 
  -d '{"title":"New Project", "description":"Project details"}'

# Delete a project
curl -X DELETE /api/projects?id=1
```

## Photos API
- **GET /api/photos**: Retrieve all photos or a specific photo by ID
- **POST /api/photos**: Upload a new photo
- **DELETE /api/photos?id=`: Delete a photo by ID

### Example Requests
```bash
# Get all photos
curl /api/photos

# Get a specific photo
curl /api/photos?id=1

# Upload a photo
curl -X POST /api/photos 
  -F "file=@/path/to/image.jpg" 
  -F "title=My Photo" 
  -F "description=Photo description"

# Delete a photo
curl -X DELETE /api/photos?id=1
```

## Notes
- These are in-memory implementations for demonstration
- Replace with a proper database in production
- Add authentication and validation in a real-world scenario
