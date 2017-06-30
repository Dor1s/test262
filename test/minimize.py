#!/usr/bin/env python2
import os
import sys

ORIG_DIR = os.path.join(os.path.realpath(__file__), 'language')
NEW_DIR = os.path.join(os.path.realpath(__file__), 'fuzzing')

def minimize(data):
  lines = data.splitlines()
  result = []
  skip = False
  for l in lines:
    if l.startswith('//'):
      continue
    if l.startswith('/*---'):
      skip = True
      continue
    if skip:
      if l.startswith('---*/'):
        skip = False
      continue

    if not l:
      continue

    result.append(l)

  return '\n'.join(result)


def main():
  tests = os.popen('find %s -name *.js' % ORIG_DIR).read().splitlines()
  for t in tests:
    with open(t) as f:
      data = f.read()
    log = 'Old size: %d' % len(data)
    data = minimize(data)
    log += ', new size: %d' % len(data)
    print log
    new_path = t.replace(ORIG_DIR, NEW_DIR)
    new_path_dir = os.path.dirname(new_path)
    if not os.path.exists(new_path_dir):
      try:
        os.makedirs(new_path_dir)
      except:
        pass
    with open(new_path, 'wb') as f:
      f.write(data)
  
  return 0


sys.exit(main())