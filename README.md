family-markings
========

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
# npm run examples:alphabet
family alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ + abcdefghijklmnopqrstuvwxyz = AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
```

```bash
# npm run examples:numberline
family numberline: )!@#$%^&*( + 0123456789 = )0!1@2#3$4%5^6&7*8(9
```

```bash
# npm run examples:symbolpath
family symbolpath: ~_+{}|:"<>? + `-=[]\;',./ = ~`_-+={[}]|\:;"'<,>.?/
```