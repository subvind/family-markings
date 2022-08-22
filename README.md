family-markings
========

legend:
- 1] Alphabet
- 2] Numberline
- 3] Symbolpath
- A] Upper
- B] Lower

tests:
```bash
DEMO: Testing first factory type...
upper: ABCDEFGHIJKLMNOPQRSTUVWXYZ
lower: abcdefghijklmnopqrstuvwxyz
merge: AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz

DEMO: Testing second factory type...
upper: )!@#$%^&*(
lower: 0123456789
merge: )0!1@2#3$4%5^6&7*8(9

DEMO: Testing third factory type...
upper: ~_+{}|:"<>?
lower: `-=[]\;',./
merge: ~`_-+={[}]|\:;"'<,>.?/
```

examples:
```bash
# npm run examples:basic
Standard basic app:
Application parts: PartAPI1
```

```bash
# npm run examples:custom
Custom app:
Application parts: PartAPI3, PartWebpage3
```

```bash
# npm run examples:full-featured
Standard full featured app:
Application parts: PartAPI1, PartAPI2, PartAPI3
```