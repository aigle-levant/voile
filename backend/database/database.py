import psycopg2
# A cursor that uses a real dict as the base type for rows
from psycopg2.extras import RealDictCursor

connect = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="mastpine",
    cursor_factory=RealDictCursor # fetches stuff like dict instead of tuples
)

# get a cursor
# not that cheapass vscode replacer
cursor = connect.cursor()