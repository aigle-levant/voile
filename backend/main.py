# libraries
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# modules
from routes import met_objects
# from backend.routes import filter_objects

app = FastAPI()

origins = [
    "http://localhost:5173",  # your frontend dev server
    "http://localhost:3000",  # optional if needed
    # "*"  # allow all origins (use with caution)
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # list of allowed origins
    allow_credentials=True,
    allow_methods=["*"],         # GET, POST, etc.
    allow_headers=["*"],         # headers you accept
)
# fetch
app.include_router(met_objects.router)
# app.include_router(filter_objects.routes)

@app.get("/")
async def index():
    return { "message": "server works!"}