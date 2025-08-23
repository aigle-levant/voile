# receive objects from met api
# libraries
from fastapi import APIRouter, HTTPException
import requests
# db
from database.database import connect, cursor

router = APIRouter()

# fetch data from MET API for objectID
# give me the response
@router.get("/objects")
async def get_objects_from_met(q:str | None = None):
    # so THIS is the response body
    # we just return response body for simplistic shit
    # but not now
    para = {"q": q, "hasImages": True}
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
   }
    search_res = requests.get("https://collectionapi.metmuseum.org/public/collection/v1/search", params=para, headers=headers, timeout=10)
    if search_res.status_code != 200:
        raise HTTPException(status_code=search_res.status_code, detail=search_res.text)
    return {
        "total": search_res.json()["total"],
        "objectIDs": search_res.json()["objectIDs"][:20]
    }
    # try:
    #     data = search_res.json()
    # except Exception:
    #     raise HTTPException(status_code=500, detail="Met API search failed")
    # object_ids = (data.get("objectIDs") or [])[:20]
    # artifacts = []
    # for ids in object_ids:
    #     res = requests.get(
    #         f"https://collectionapi.metmuseum.org/public/collection/v1/objects/{obj_id}"
    #     )
    #     if res.status_code != 200:
    #         continue
    #     try:
    #         data = res.json()
    #     except Exception:
    #         continue
    #     finally:
    #         artifacts.append({
    #         "objectID": data.get("objectID"),
    #         "primaryImage": data.get("primaryImage"),
    #         "title": data.get("title"),
    #         "culture": data.get("culture"),
    #         "period": data.get("period"),
    #         "artistDisplayName": data.get("artistDisplayName"),
    #         "objectDate": data.get("objectDate"),
    #         "country": data.get("country"),
    #     })
    
    # return artifacts
    