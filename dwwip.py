#!/usr/bin/env python3
import json
import datetime as dt 
import os

def main():
  info = {}
  with open("/var/www/aleph17.myaddr.io/api.json","r") as f:
    info = json.loads(f.read())
    answer = os.system("ping -c1 -w120 aleph17.myaddr.io")
    print(answer)
    if(answer != 0):
      if(info["currently_online"]):
        info["days_active"] = 0
        info["last_lost_ip"] = dt.date.today().isoformat()
        info["currently_online"] = False
    else:
      if(not info["currently_online"]):
        info["currently_online"] = True
      info["days_active"] += 1

  with open("/var/www/aleph17.myaddr.io/api.json","w") as f:
    f.write(json.dumps(info))

  return 0

if (__name__ == "__main__"):
  main()


