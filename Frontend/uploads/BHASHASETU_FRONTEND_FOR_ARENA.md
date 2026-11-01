# BHASHA SETU — EXISTING FRONTEND SOURCE BUNDLE

This file contains the source/configuration of the existing Bhasha Setu frontend.
IMPORTANT: Preserve the existing UI/design/layout. Modify functionality primarily to match the latest backend.
Do not treat this as permission to redesign the application from scratch.
No real environment secrets are included.


---

## FILE: `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Bhasha Setu (Setu AI) — teacher dashboard for mother-tongue based learning in Jharkhand. Generate structured Hindi lessons and translate them into Santhali (Ol Chiki)."
    />
    <meta name="theme-color" content="#120E0C" />
    <title>Bhasha Setu · Teacher Dashboard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

---

## FILE: `package-lock.json`

```json
{
  "name": "react-vite-tailwind",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "react-vite-tailwind",
      "version": "0.0.0",
      "dependencies": {
        "clsx": "2.1.1",
        "react": "19.2.6",
        "react-dom": "19.2.6",
        "tailwind-merge": "3.4.0"
      },
      "devDependencies": {
        "@tailwindcss/vite": "4.1.17",
        "@types/node": "22.19.17",
        "@types/react": "19.2.7",
        "@types/react-dom": "19.2.3",
        "@vitejs/plugin-react": "5.1.1",
        "tailwindcss": "4.1.17",
        "typescript": "5.9.3",
        "vite": "7.3.2",
        "vite-plugin-singlefile": "2.3.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.8.tgz",
      "integrity": "sha512-gZbepsdh3WDtgZKWL+vTPh71LSBrm/Y4/QDZBVCcYfmeTEEuoOYwlSy+G1StfJg+/Zy550u/3TATbm7qDbbMtg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.8",
        "@babel/types": "^7.29.8",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.29.7.tgz",
      "integrity": "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.29.7.tgz",
      "integrity": "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.29.7.tgz",
      "integrity": "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.29.7.tgz",
      "integrity": "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.29.7.tgz",
      "integrity": "sha512-G7sHYigPY17oO5SYWnfD/0MTBwVR781S/JI643e/JhUYgVgWE/61SoW3NH9KWUKyKq5LVh3npif99Wkt6j86Jw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.29.7.tgz",
      "integrity": "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.7.tgz",
      "integrity": "sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.8.tgz",
      "integrity": "sha512-E8lTAYNB1KW+FH+VGJuZM1ioAx2E6oVlvQFRrf5P8ZZmsiJXYAD9vTFV7yyEURNzgh1dFqMZuO6tUwcARbqFCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.8"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.29.7.tgz",
      "integrity": "sha512-TL0hMc9xzy86VD31nUiwzd5otRAcyEPcsegCxolO0PvcXuH1v0kECe/UIznYFihpkvU5wg/jk4v0TTEFfm53fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.29.7.tgz",
      "integrity": "sha512-06IyK09H3wi4cGbhDBwp5gUGo0IKtnYa8tyTiephirPCK6fbobVGiXMMI5zLQ4aKEYP3wZ3ArU44o+8KMrSG/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.29.7.tgz",
      "integrity": "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.8.tgz",
      "integrity": "sha512-I5z7H3bf/41ktsNVLtpN0wAa336HkqIHQ5BuPLEhTkt1jVSyZpeNKIzTgEWmlxjdg81R0IgUCcaE+Ok3NvrfZg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.8",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.8",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.8",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.8.tgz",
      "integrity": "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.7.tgz",
      "integrity": "sha512-EKX3Qwmhz1eMdEJokhALr0YiD0lhQNwDqkPYyPhiSwKrh7/4KRjQc04sZ8db+5DVVnZ1LmbNDI1uAMPEUBnQPg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.7.tgz",
      "integrity": "sha512-jbPXvB4Yj2yBV7HUfE2KHe4GJX51QplCN1pGbYjvsyCZbQmies29EoJbkEc+vYuU5o45AfQn37vZlyXy4YJ8RQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.7.tgz",
      "integrity": "sha512-62dPZHpIXzvChfvfLJow3q5dDtiNMkwiRzPylSCfriLvZeq0a1bWChrGx/BbUbPwOrsWKMn8idSllklzBy+dgQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.7.tgz",
      "integrity": "sha512-x5VpMODneVDb70PYV2VQOmIUUiBtY3D3mPBG8NxVk5CogneYhkR7MmM3yR/uMdITLrC1ml/NV1rj4bMJuy9MCg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.7.tgz",
      "integrity": "sha512-5lckdqeuBPlKUwvoCXIgI2D9/ABmPq3Rdp7IfL70393YgaASt7tbju3Ac+ePVi3KDH6N2RqePfHnXkaDtY9fkw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.7.tgz",
      "integrity": "sha512-rYnXrKcXuT7Z+WL5K980jVFdvVKhCHhUwid+dDYQpH+qu+TefcomiMAJpIiC2EM3Rjtq0sO3StMV/+3w3MyyqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.7.tgz",
      "integrity": "sha512-B48PqeCsEgOtzME2GbNM2roU29AMTuOIN91dsMO30t+Ydis3z/3Ngoj5hhnsOSSwNzS+6JppqWsuhTp6E82l2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.7.tgz",
      "integrity": "sha512-jOBDK5XEjA4m5IJK3bpAQF9/Lelu/Z9ZcdhTRLf4cajlB+8VEhFFRjWgfy3M1O4rO2GQ/b2dLwCUGpiF/eATNQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.7.tgz",
      "integrity": "sha512-RkT/YXYBTSULo3+af8Ib0ykH8u2MBh57o7q/DAs3lTJlyVQkgQvlrPTnjIzzRPQyavxtPtfg0EopvDyIt0j1rA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.7.tgz",
      "integrity": "sha512-RZPHBoxXuNnPQO9rvjh5jdkRmVizktkT7TCDkDmQ0W2SwHInKCAV95GRuvdSvA7w4VMwfCjUiPwDi0ZO6Nfe9A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.7.tgz",
      "integrity": "sha512-GA48aKNkyQDbd3KtkplYWT102C5sn/EZTY4XROkxONgruHPU72l+gW+FfF8tf2cFjeHaRbWpOYa/uRBz/Xq1Pg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.7.tgz",
      "integrity": "sha512-a4POruNM2oWsD4WKvBSEKGIiWQF8fZOAsycHOt6JBpZ+JN2n2JH9WAv56SOyu9X5IqAjqSIPTaJkqN8F7XOQ5Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.7.tgz",
      "integrity": "sha512-KabT5I6StirGfIz0FMgl1I+R1H73Gp0ofL9A3nG3i/cYFJzKHhouBV5VWK1CSgKvVaG4q1RNpCTR2LuTVB3fIw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.7.tgz",
      "integrity": "sha512-gRsL4x6wsGHGRqhtI+ifpN/vpOFTQtnbsupUF5R5YTAg+y/lKelYR1hXbnBdzDjGbMYjVJLJTd2OFmMewAgwlQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.7.tgz",
      "integrity": "sha512-hL25LbxO1QOngGzu2U5xeXtxXcW+/GvMN3ejANqXkxZ/opySAZMrc+9LY/WyjAan41unrR3YrmtTsUpwT66InQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.7.tgz",
      "integrity": "sha512-2k8go8Ycu1Kb46vEelhu1vqEP+UeRVj2zY1pSuPdgvbd5ykAw82Lrro28vXUrRmzEsUV0NzCf54yARIK8r0fdw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.7.tgz",
      "integrity": "sha512-hzznmADPt+OmsYzw1EE33ccA+HPdIqiCRq7cQeL1Jlq2gb1+OyWBkMCrYGBJ+sxVzve2ZJEVeePbLM2iEIZSxA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.7.tgz",
      "integrity": "sha512-b6pqtrQdigZBwZxAn1UpazEisvwaIDvdbMbmrly7cDTMFnw/+3lVxxCTGOrkPVnsYIosJJXAsILG9XcQS+Yu6w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.7.tgz",
      "integrity": "sha512-OfatkLojr6U+WN5EDYuoQhtM+1xco+/6FSzJJnuWiUw5eVcicbyK3dq5EeV/QHT1uy6GoDhGbFpprUiHUYggrw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.7.tgz",
      "integrity": "sha512-AFuojMQTxAz75Fo8idVcqoQWEHIXFRbOc1TrVcFSgCZtQfSdc1RXgB3tjOn/krRHENUB4j00bfGjyl2mJrU37A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.7.tgz",
      "integrity": "sha512-+A1NJmfM8WNDv5CLVQYJ5PshuRm/4cI6WMZRg1by1GwPIQPCTs1GLEUHwiiQGT5zDdyLiRM/l1G0Pv54gvtKIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.7.tgz",
      "integrity": "sha512-+KrvYb/C8zA9CU/g0sR6w2RBw7IGc5J2BPnc3dYc5VJxHCSF1yNMxTV5LQ7GuKteQXZtspjFbiuW5/dOj7H4Yw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.7.tgz",
      "integrity": "sha512-ikktIhFBzQNt/QDyOL580ti9+5mL/YZeUPKU2ivGtGjdTYoqz6jObj6nOMfhASpS4GU4Q/Clh1QtxWAvcYKamA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.7.tgz",
      "integrity": "sha512-7yRhbHvPqSpRUV7Q20VuDwbjW5kIMwTHpptuUzV+AA46kiPze5Z7qgt6CLCK3pWFrHeNfDd1VKgyP4O+ng17CA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.7.tgz",
      "integrity": "sha512-SmwKXe6VHIyZYbBLJrhOoCJRB/Z1tckzmgTLfFYOfpMAx63BJEaL9ExI8x7v0oAO3Zh6D/Oi1gVxEYr5oUCFhw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.7.tgz",
      "integrity": "sha512-56hiAJPhwQ1R4i+21FVF7V8kSD5zZTdHcVuRFMW0hn753vVfQN8xlx4uOPT4xoGH0Z/oVATuR82AiqSTDIpaHg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/lzma-linux-x64-gnu": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/lzma-linux-x64-gnu/-/lzma-linux-x64-gnu-1.5.1.tgz",
      "integrity": "sha512-oTXEIha4SsuXdTA4Iyskj0kpdx2yVXdhd75c2v3xGrHFfVMsbhTPZU/nMPL4sWKo4pBHm3aucLaqGlF696dTyQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^22.20 || ^24.12 || >=25"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.47",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.47.tgz",
      "integrity": "sha512-8QagwMH3kNCuzD8EWL8R2YPW5e4OrHNSAHRFDdmFqEwEaD/KcNKjVoumo+gP2vW5eKB2UPbM6vTYiGZX0ixLnw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.63.1.tgz",
      "integrity": "sha512-UZ8sUxPTiHWYX9QNdJedb1kDZSpS1t/VPWBWGSgqHNi9w3Cu6IXvu2mzbhiTiPvtrqgTQJ+zqiAq2iPIPilpaQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.63.1.tgz",
      "integrity": "sha512-cQ4nFQABN5cDvDpbvJ7bMStCpnaVxynZrRMfUJYgxcIk9Sh54FIO1vtfkg0B69REjER77ioZ/ov+eAApx/KmLQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.63.1.tgz",
      "integrity": "sha512-FQNqd1lRy/0QhDk3xeRIkSBiCpXCiDnZO3YLVdcDKN1UBiKToNftCzcXYNLshmPDUMlu2TdeS8tGcsU6f3YF1Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.63.1.tgz",
      "integrity": "sha512-pvD16V939D3CloK0+qikpGaxiPrDUXTe7Y5cWOMkMSy7m1cawa8EGy/kXYi/G/cKAC4HDAbSnzCIk1WmsoOKXg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.63.1.tgz",
      "integrity": "sha512-pcFGeL2345VwdTnJhA6zLbew+YgWB0qBG2+dMtXjCicf6+rm6kO6cOoh5VnTe0ZMrMRgRyuHmCJxZWrIdzYuOw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.63.1.tgz",
      "integrity": "sha512-mRJlqSRulVzcKq/LKA6ICSIc3K/l4fzlVn/gePn2nXIHy8seRi5z/eeRE0d/XMBxcMldiXtQTSpRj0tkkC3g8Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.63.1.tgz",
      "integrity": "sha512-YDUNvVM85TI3g/1OpnqKP1h4NeW/j64DfWMf+G3M809xNk1bJSnpFp4sh83NpmVE5DXnkh8ULor4LTVZKoYLHw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.63.1.tgz",
      "integrity": "sha512-7Mcn71p9ZuQFAj+h+dhQXy/yeLePRS2yKRnmW1DijA9thKO5qap0GNOIQK4yQ6iP3SU0Mrb/yWo8h8vgRba8lw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.63.1.tgz",
      "integrity": "sha512-4YiLQTX6U4CSl0L9cluep9A9W6UmTfqBDc2/CH6wlu54pl4E7Jn3cOD8oxzvBDEGk/JMKgJ47C8g+radF7mwvg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.63.1.tgz",
      "integrity": "sha512-2ra8F7w8OquwZN9z2/fKFnli69wa8PLwaVzRMIPGb13ByMJwC28Fbp8YcVGoUhlYMTt7j5j9bNgpysrN2UM+vw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.63.1.tgz",
      "integrity": "sha512-Sy20ncyhjmBP0Ml+UvQbimjlk6VFgjW5uNP+qqwHB00mTE8Bl2C1TuHTlRwK2YoXeZbee5lP2XevBWVkAQAtSQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-musl": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.63.1.tgz",
      "integrity": "sha512-noITLp8oNjYliPnGWmLyelIHwULGqbHloQHGw1rtxbWhTuWooRpnZarZQJ1y9EUC4szuCusCc+HEpUtxpIwYvA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.63.1.tgz",
      "integrity": "sha512-hlxxXd+F1mWiAcaFR7Sv9ZQT6m6UfI8+Vy/kFJzztq2pDMU/0wZ9sish0iszNZvsQDo8Gc0i5yuFEOz5dDf6fA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-musl": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.63.1.tgz",
      "integrity": "sha512-EF7OpqQTQ/BvGqLzUi4rEHuagCV9MugAUXSHemwPW5vxZ75RR+jxO/2j95Ph2dalMpFHSVECjRoioHZgA9zOYA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.63.1.tgz",
      "integrity": "sha512-wQO3JesW9PRkwlabQ27y7sPfVOOTLRG73I4F2UYHG5PXun3J9U3y+b7ezVKSYbsvSKGQ1k1cq8Qlun4C9kLt3w==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.63.1.tgz",
      "integrity": "sha512-ouAGwhO6wHRXdnOVCOsB0tRFkA7nhNB2Nwax6oECXN0YiN8EYUTBAOudADOB1PI+yDL61TeNx/u7MVCzksNbkQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.63.1.tgz",
      "integrity": "sha512-q2R38Sn+1J8RxhfJ+T54wSWmyKXWec+9jgDfqO2AtArEqHO5R2aeayp5H5OYLr5UYDVGsVaZPEFUooMhYCdz5A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.63.1.tgz",
      "integrity": "sha512-gfI5T24WLLuFfSKw7Go/zDXjAAV0fny0swTaDv+WjK7vqcw4cRhFfdsyKL1n+ukI+ooBxn3bVQnyrn06WpI50w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.63.1.tgz",
      "integrity": "sha512-4h6XqthmB4Hspji84wvgk+ElodTsGj+dbZqHJHHtKxj4mYq0ANSEEPX9ys3moJueqsRjwpaJYH7874Itwnj2ow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openbsd-x64": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.63.1.tgz",
      "integrity": "sha512-dlfCOa87o1VAYegLQ9EKilx2JCeRofiyPGhTCmqnuXZ6bMPiycO1rq1+sKoulAp7pGLIsTIw+1x5R+zgh5LhhA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.63.1.tgz",
      "integrity": "sha512-cjkLbOlfcm3QGhMM1J5zaZjsw1GggbN6rw9UTSSRrPrR1KkcXnN7Uq9rPw34xImQ9VOY9GN+6u2Zj80B9ptkcw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.63.1.tgz",
      "integrity": "sha512-Li1KdUnWGE4N3e1F/B4RTB1ms+nG4WBgjByO46pkeBVX/2UBsY53xf5vK9WygVmnH3RwncIST7lkSdLSY6P9lg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.63.1.tgz",
      "integrity": "sha512-t4ZYOSoLTgwhuFMrmTMLx/+i1DQVK7HYqMc6kY46EApwi8X0nIVphzdNoThU3xt6n+N5urG1/gxBdCaKDLavfg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.63.1.tgz",
      "integrity": "sha512-RgroPfMmKlD1RzSDxvwgcPiy2HNQKoYV7OmwIXDsk73uKW5t6B/V8KIy27SMv/FNXFo/oSBtWc9J0X7t91ezZg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.63.1.tgz",
      "integrity": "sha512-at8QVep6S3h5Y6gSbdGU06bRY5WJkf6WUduM9YtvYMbYhB1MOFfUgc6kehitQXzOtMSaT70q7f9ydPhpqu821w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.17.tgz",
      "integrity": "sha512-csIkHIgLb3JisEFQ0vxr2Y57GUNYh447C8xzwj89U/8fdW8LhProdxvnVH6U8M2Y73QKiTIH+LWbK3V2BBZsAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.17"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.17.tgz",
      "integrity": "sha512-F0F7d01fmkQhsTjXezGBLdrl1KresJTcI3DB8EkScCldyKp3Msz4hub4uyYaVnk88BAS1g5DQjjF6F5qczheLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.17",
        "@tailwindcss/oxide-darwin-arm64": "4.1.17",
        "@tailwindcss/oxide-darwin-x64": "4.1.17",
        "@tailwindcss/oxide-freebsd-x64": "4.1.17",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.17",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.17",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.17",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.17",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.17",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.17",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.17",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.17"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.17.tgz",
      "integrity": "sha512-BMqpkJHgOZ5z78qqiGE6ZIRExyaHyuxjgrJ6eBO5+hfrfGkuya0lYfw8fRHG77gdTjWkNWEEm+qeG2cDMxArLQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.17.tgz",
      "integrity": "sha512-EquyumkQweUBNk1zGEU/wfZo2qkp/nQKRZM8bUYO0J+Lums5+wl2CcG1f9BgAjn/u9pJzdYddHWBiFXJTcxmOg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.17.tgz",
      "integrity": "sha512-gdhEPLzke2Pog8s12oADwYu0IAw04Y2tlmgVzIN0+046ytcgx8uZmCzEg4VcQh+AHKiS7xaL8kGo/QTiNEGRog==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.17.tgz",
      "integrity": "sha512-hxGS81KskMxML9DXsaXT1H0DyA+ZBIbyG/sSAjWNe2EDl7TkPOBI42GBV3u38itzGUOmFfCzk1iAjDXds8Oh0g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.17.tgz",
      "integrity": "sha512-k7jWk5E3ldAdw0cNglhjSgv501u7yrMf8oeZ0cElhxU6Y2o7f8yqelOp3fhf7evjIS6ujTI3U8pKUXV2I4iXHQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.17.tgz",
      "integrity": "sha512-HVDOm/mxK6+TbARwdW17WrgDYEGzmoYayrCgmLEw7FxTPLcp/glBisuyWkFz/jb7ZfiAXAXUACfyItn+nTgsdQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.17.tgz",
      "integrity": "sha512-HvZLfGr42i5anKtIeQzxdkw/wPqIbpeZqe7vd3V9vI3RQxe3xU1fLjss0TjyhxWcBaipk7NYwSrwTwK1hJARMg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.17.tgz",
      "integrity": "sha512-M3XZuORCGB7VPOEDH+nzpJ21XPvK5PyjlkSFkFziNHGLc5d6g3di2McAAblmaSUNl8IOmzYwLx9NsE7bplNkwQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.17.tgz",
      "integrity": "sha512-k7f+pf9eXLEey4pBlw+8dgfJHY4PZ5qOUFDyNf7SI6lHjQ9Zt7+NcscjpwdCEbYi6FI5c2KDTDWyf2iHcCSyyQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.17.tgz",
      "integrity": "sha512-cEytGqSSoy7zK4JRWiTCx43FsKP/zGr0CsuMawhH67ONlH+T79VteQeJQRO/X7L0juEUA8ZyuYikcRBf0vsxhg==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.6.0",
        "@emnapi/runtime": "^1.6.0",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.0.7",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.17.tgz",
      "integrity": "sha512-JU5AHr7gKbZlOGvMdb4722/0aYbU+tN6lv1kONx0JK2cGsh7g148zVWLM0IKR3NeKLv+L90chBVYcJ8uJWbC9A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.17.tgz",
      "integrity": "sha512-SKWM4waLuqx0IH+FMDUw6R66Hu4OuTALFgnleKbqhgGU30DY20NORZMZUKgLRjQXNN2TLzKvh48QXTig4h4bGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.1.17.tgz",
      "integrity": "sha512-4+9w8ZHOiGnpcGI6z1TVVfWaX/koK7fKeSYF3qlYg2xpBtbteP2ddBxiarL+HVgfSJGeK5RIxRQmKm4rTJJAwA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.1.17",
        "@tailwindcss/oxide": "4.1.17",
        "tailwindcss": "4.1.17"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "22.19.17",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.19.17.tgz",
      "integrity": "sha512-wGdMcf+vPYM6jikpS/qhg6WiqSV/OhG+jeeHT/KlVqxYfD40iYJf9/AE1uQxVWFvU7MipKRkRv8NSHiCGgPr8Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.1.tgz",
      "integrity": "sha512-WQfkSw0QbQ5aJ2CHYw23ZGkqnRwqKHD/KYsMeTkZzPT4Jcf0DcBxBtwMJxnu6E7oxw5+JC6ZAiePgh28uJ1HBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.47",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.21",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.21.tgz",
      "integrity": "sha512-uh8vpY/1/YyFkunIDFH/12p7/7VdPKA1hejMVEbdkEaWnUz0Hesvx5EbiU6XxjyHZIOju+ZMbQJkRh+es3/spQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.9",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.9.tgz",
      "integrity": "sha512-EWazOblFYUvlGZcfGhPUPmYh3nikUxBVb+y9MJun5f3hBi812X+8MSQTujLBtgK3cf51fJWbWfOjyeO954d+Eg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.20",
        "caniuse-lite": "^1.0.30001810",
        "electron-to-chromium": "^1.5.420",
        "node-releases": "^2.0.54",
        "update-browserslist-db": "^1.3.2"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001810",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001810.tgz",
      "integrity": "sha512-TITQPUkaz+aVk5GL6NhOdwk1aEaNTSDPsGFWrTuhKGtjTF70jL/Oht2W4c6rXUe5fu7Ie19VIahAXHIIiWWNeg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.423",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.423.tgz",
      "integrity": "sha512-rRZfTSY8ptHYMQxa+uIycJMFKmY1T0GIApNMXJYGehguTZa56TEEl19pKPCoBqk5Gpf7QizZn/jt7xur+DYxag==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.24.5",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.24.5.tgz",
      "integrity": "sha512-L1l8TNvomm6UVW5B253AGxQagSQr+vGwhMlrrfRS2qmhx46AMpMVJKQYLvWYbysTMY8VoicOvzHzoHMbyzB+4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.7.tgz",
      "integrity": "sha512-IxpibTjyVnmrIQo5aqNpCgoACA/dTKLTlhMHihVHhdkxKyPO1uBBthumT0rdHmcsk9uMonIWS0m4FljWzILh3w==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.7",
        "@esbuild/android-arm": "0.27.7",
        "@esbuild/android-arm64": "0.27.7",
        "@esbuild/android-x64": "0.27.7",
        "@esbuild/darwin-arm64": "0.27.7",
        "@esbuild/darwin-x64": "0.27.7",
        "@esbuild/freebsd-arm64": "0.27.7",
        "@esbuild/freebsd-x64": "0.27.7",
        "@esbuild/linux-arm": "0.27.7",
        "@esbuild/linux-arm64": "0.27.7",
        "@esbuild/linux-ia32": "0.27.7",
        "@esbuild/linux-loong64": "0.27.7",
        "@esbuild/linux-mips64el": "0.27.7",
        "@esbuild/linux-ppc64": "0.27.7",
        "@esbuild/linux-riscv64": "0.27.7",
        "@esbuild/linux-s390x": "0.27.7",
        "@esbuild/linux-x64": "0.27.7",
        "@esbuild/netbsd-arm64": "0.27.7",
        "@esbuild/netbsd-x64": "0.27.7",
        "@esbuild/openbsd-arm64": "0.27.7",
        "@esbuild/openbsd-x64": "0.27.7",
        "@esbuild/openharmony-arm64": "0.27.7",
        "@esbuild/sunos-x64": "0.27.7",
        "@esbuild/win32-arm64": "0.27.7",
        "@esbuild/win32-ia32": "0.27.7",
        "@esbuild/win32-x64": "0.27.7"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/micromatch/node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.18",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.18.tgz",
      "integrity": "sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.54",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.54.tgz",
      "integrity": "sha512-YHs7BmmcsdAI5Ozuf8JZo6PT0mv2GIWC9vMfvUC3dp65M8hn7Ux8CPL+2oBI7juNuj9d0ndhTcznq2ODBps9cQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.28",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.28.tgz",
      "integrity": "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.18",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.2.6",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.6.tgz",
      "integrity": "sha512-sfWGGfavi0xr8Pg0sVsyHMAOziVYKgPLNrS7ig+ivMNb3wbCBw3KxtflsGBAwD3gYQlE/AEZsTLgToRrSCjb0Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.6",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.6.tgz",
      "integrity": "sha512-0prMI+hvBbPjsWnxDLxlCGyM8PN6UuWjEUCYmZhO67xIV9Xasa/r/vDnq+Xyq4Lo27g8QSbO5YzARu0D1Sps3g==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.6"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/rollup": {
      "version": "4.63.1",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.63.1.tgz",
      "integrity": "sha512-3Df9jsstwhccuEfmAMi9l8XUh/GOkVObmFTU7CCVBysEbcOZLl84jCtaAZMcPiMz2EGKsATzQcU+Xr3n/wU6cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.9"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@napi-rs/lzma-linux-x64-gnu": "1.5.1",
        "@rollup/rollup-android-arm-eabi": "4.63.1",
        "@rollup/rollup-android-arm64": "4.63.1",
        "@rollup/rollup-darwin-arm64": "4.63.1",
        "@rollup/rollup-darwin-x64": "4.63.1",
        "@rollup/rollup-freebsd-arm64": "4.63.1",
        "@rollup/rollup-freebsd-x64": "4.63.1",
        "@rollup/rollup-linux-arm-gnueabihf": "4.63.1",
        "@rollup/rollup-linux-arm-musleabihf": "4.63.1",
        "@rollup/rollup-linux-arm64-gnu": "4.63.1",
        "@rollup/rollup-linux-arm64-musl": "4.63.1",
        "@rollup/rollup-linux-loong64-gnu": "4.63.1",
        "@rollup/rollup-linux-loong64-musl": "4.63.1",
        "@rollup/rollup-linux-ppc64-gnu": "4.63.1",
        "@rollup/rollup-linux-ppc64-musl": "4.63.1",
        "@rollup/rollup-linux-riscv64-gnu": "4.63.1",
        "@rollup/rollup-linux-riscv64-musl": "4.63.1",
        "@rollup/rollup-linux-s390x-gnu": "4.63.1",
        "@rollup/rollup-linux-x64-gnu": "4.63.1",
        "@rollup/rollup-linux-x64-musl": "4.63.1",
        "@rollup/rollup-openbsd-x64": "4.63.1",
        "@rollup/rollup-openharmony-arm64": "4.63.1",
        "@rollup/rollup-win32-arm64-msvc": "4.63.1",
        "@rollup/rollup-win32-ia32-msvc": "4.63.1",
        "@rollup/rollup-win32-x64-gnu": "4.63.1",
        "@rollup/rollup-win32-x64-msvc": "4.63.1",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tailwind-merge": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.4.0.tgz",
      "integrity": "sha512-uSaO4gnW+b3Y2aWoWfFpX62vn2sR3skfhbjsEnaBI81WD1wBLlHZe5sWf0AqjksNdYTbGBEd0UasQMT3SNV15g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.17.tgz",
      "integrity": "sha512-j9Ee2YjuQqYT9bbRTfTZht9W/ytp5H+jJpZKiYdP/bpnXARAuELt9ofP0lPnmHjbga7SNQIxdTAXCmtKVYjN+Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.3.2.tgz",
      "integrity": "sha512-UQ+MSxlhRm1bzjhU+DcuXfjFO1FzNtqhK5+9Yvlp90ItDLk5vT932A0rFu619nf7RVS+Y/VeaUW1jaRDqZ8VJw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/vite": {
      "version": "7.3.2",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.2.tgz",
      "integrity": "sha512-Bby3NOsna2jsjfLVOHKes8sGwgl4TT0E6vvpYgnAYDIF/tie7MRaFthmKuHx1NSXjiTueXH3do80FMQgvEktRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite-plugin-singlefile": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/vite-plugin-singlefile/-/vite-plugin-singlefile-2.3.0.tgz",
      "integrity": "sha512-DAcHzYypM0CasNLSz/WG0VdKOCxGHErfrjOoyIPiNxTPTGmO6rRD/te93n1YL/s+miXq66ipF1brMBikf99c6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">18.0.0"
      },
      "peerDependencies": {
        "rollup": "^4.44.1",
        "vite": "^5.4.11 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    }
  }
}

```

---

## FILE: `package.json`

```json
{
  "name": "react-vite-tailwind",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "2.1.1",
    "react": "19.2.6",
    "react-dom": "19.2.6",
    "tailwind-merge": "3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.17",
    "@types/node": "22.19.17",
    "@types/react": "19.2.7",
    "@types/react-dom": "19.2.3",
    "@vitejs/plugin-react": "5.1.1",
    "tailwindcss": "4.1.17",
    "typescript": "5.9.3",
    "vite": "7.3.2",
    "vite-plugin-singlefile": "2.3.0"
  }
}

```

---

## FILE: `src/App.tsx`

```tsx
import { useEffect, useMemo, useState } from "react";
import { TeachingProvider } from "@/lib/store";
import { useRoute } from "@/lib/router";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/pages/Dashboard";
import { LessonGenerator } from "@/pages/LessonGenerator";
import { TranslationStudio } from "@/pages/TranslationStudio";
import { WorksheetGenerator } from "@/pages/WorksheetGenerator";
import { FlashcardGenerator } from "@/pages/FlashcardGenerator";

function PageSwitch() {
  const path = useRoute();
  const [rendered, setRendered] = useState(path);
  const [visible, setVisible] = useState(true);

  // smooth navigation transition between routes
  useEffect(() => {
    if (path === rendered) return;
    setVisible(false);
    const timer = window.setTimeout(() => {
      setRendered(path);
      window.scrollTo({ top: 0, behavior: "auto" });
      setVisible(true);
    }, 190);
    return () => window.clearTimeout(timer);
  }, [path, rendered]);

  const page = useMemo(() => {
    switch (rendered) {
      case "/lesson-generator":
        return <LessonGenerator />;
      case "/translation-studio":
        return <TranslationStudio />;
      case "/worksheet-generator":
        return <WorksheetGenerator />;
      case "/flashcard-generator":
        return <FlashcardGenerator />;
      default:
        return <Dashboard />;
    }
  }, [rendered]);

  return (
    <div
      className="transition-opacity duration-200 ease-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {page}
    </div>
  );
}

export default function App() {
  return (
    <TeachingProvider>
      <div className="min-h-screen bg-paper font-sans antialiased">
        <TopBar />
        <PageSwitch />
        <Footer />
      </div>
    </TeachingProvider>
  );
}

```

---

## FILE: `src/components/Footer.tsx`

```tsx
import { Link, ROUTES } from "@/lib/router";
import { BridgeMark, SohraiBand } from "@/components/ui/Culture";
import {
  IconArrowRight,
  IconBook,
  IconLanguages,
  IconWorksheet,
  IconFlashcards,
} from "@/components/ui/Icons";
import { useTeaching, MOTHER_TONGUE } from "@/lib/store";

export function Footer() {
  const { classLevel, subjectMeta } = useTeaching();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <SohraiBand color="#DFA03C" opacity={0.2} className="h-8 w-full" />
      <div className="mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <BridgeMark className="h-10 w-10 rounded-[12px]" />
              <div className="leading-none">
                <p className="font-display text-lg font-semibold">Bhasha Setu</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre/80">
                  Setu AI · Jharkhand
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/55">
              A teacher-first prototype for mother-tongue based learning. Lessons are drafted in
              Hindi and bridged into {MOTHER_TONGUE.name} ({MOTHER_TONGUE.scriptName}) — review
              language output with a community language expert before classroom use.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/40">
              Prototype · {classLevel > 0 ? `Class ${classLevel}` : "Classes 1–5"} ·{" "}
              {subjectMeta.label}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to={ROUTES.lessonGenerator}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]"
            >
              <IconBook className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Lesson Generator</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">पाठ जनरेटर</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={ROUTES.translationStudio}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]"
            >
              <IconLanguages className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Translation Studio</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">अनुवाद स्टूडियो</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={ROUTES.worksheetGenerator}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]"
            >
              <IconWorksheet className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Worksheet Generator</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">अभ्यास पत्रिका</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={ROUTES.flashcardGenerator}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]"
            >
              <IconFlashcards className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Flashcard Generator</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">फ़्लैशकार्ड</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bhasha Setu · Bridging Languages. Empowering Classrooms.</p>
          <p className="font-olchiki text-[13px] text-ochre/60">
            ᱥᱟᱱᱛᱟᱲᱤ · ᱚᱞ ᱪᱤᱠᱤ
          </p>
        </div>
      </div>
    </footer>
  );
}

```

---

## FILE: `src/components/ToolHeader.tsx`

```tsx
import type { ReactNode } from "react";
import collage from "@/assets/jharkhand-collage.jpg";
import { Link, ROUTES } from "@/lib/router";
import { useTeaching } from "@/lib/store";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile, SohraiBand } from "@/components/ui/Culture";
import { IconArrowLeft, IconPin } from "@/components/ui/Icons";

type ToolHeaderProps = {
  index: string;
  title: string;
  hindiTitle: string;
  description: string;
  meta: ReactNode;
  icon: ReactNode;
};

export function ToolHeader({
  index,
  title,
  hindiTitle,
  description,
  meta,
  icon,
}: ToolHeaderProps) {
  const { classLevel, subjectMeta } = useTeaching();

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-20">
        <img
          src={collage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.5]"
          style={{ objectPosition: "70% 45%" }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(18,14,12,0.97)_0%,rgba(18,14,12,0.93)_44%,rgba(18,14,12,0.55)_70%,rgba(18,14,12,0.25)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink to-transparent" />
      <SohraiTile
        id={`tool-${index}`}
        color="#F3E7D2"
        opacity={0.07}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-64 w-64 animate-glow rounded-full bg-clay/30 blur-[110px]" />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-11 pt-28 sm:px-6 sm:pt-32">
        <Reveal from="left">
          <Link
            to={ROUTES.dashboard}
            className="group inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-[12px] font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:border-ochre/50 hover:text-white"
          >
            <IconArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Teacher Dashboard
          </Link>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={80} className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/18 bg-white/10 backdrop-blur-md sm:h-14 sm:w-14">
                {icon}
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ochre">
                  {index}
                </p>
                <h1 className="font-display text-[clamp(1.9rem,4.6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
                  {title}
                </h1>
              </div>
            </div>
            <p className="font-deva mt-3 text-[14px] text-ochre/85">{hindiTitle}</p>
            <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-white/70 sm:text-[15.5px]">
              {description}
            </p>
          </Reveal>

          <Reveal delay={160} className="flex flex-col items-start gap-2.5 sm:items-end">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-xl border border-white/14 bg-white/8 px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md">
                Class {classLevel}
              </span>
              <span className="rounded-xl border border-white/14 bg-white/8 px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md">
                {subjectMeta.label}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-ochre/35 bg-ochre/12 px-3 py-1.5 text-[12px] font-semibold text-ochre">
                <IconPin className="h-3.5 w-3.5" />
                Jharkhand
              </span>
            </div>
            <p className="font-deva text-[12px] text-white/45">
              कक्षा और विषय डैशबोर्ड से लिए गए
            </p>
            {meta}
          </Reveal>
        </div>

        <SohraiBand
          color="#DFA03C"
          opacity={0.18}
          className="mt-9 h-6 w-full max-w-md"
        />
      </div>
    </section>
  );
}

```

---

## FILE: `src/components/TopBar.tsx`

```tsx
import { useEffect, useState } from "react";
import { Link, ROUTES, useRoute } from "@/lib/router";
import { MOTHER_TONGUE } from "@/lib/store";
import { BridgeMark } from "@/components/ui/Culture";
import {
  IconGrid,
  IconBook,
  IconLanguages,
  IconWorksheet,
  IconFlashcards,
} from "@/components/ui/Icons";
import { cn } from "@/utils/cn";

const NAV = [
  { to: ROUTES.dashboard, label: "Dashboard", short: "Dashboard", Icon: IconGrid },
  { to: ROUTES.lessonGenerator, label: "Lesson Generator", short: "Lessons", Icon: IconBook },
  {
    to: ROUTES.translationStudio,
    label: "Translation Studio",
    short: "Translate",
    Icon: IconLanguages,
  },
  { to: ROUTES.worksheetGenerator, label: "Worksheet", short: "Worksheet", Icon: IconWorksheet },
  { to: ROUTES.flashcardGenerator, label: "Flashcards", short: "Cards", Icon: IconFlashcards },
];

export function TopBar() {
  const path = useRoute();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-3.5 sm:py-4",
      )}
    >
      <div className="mx-auto w-full max-w-[1240px] px-3 sm:px-6">
        <div
          className={cn(
            "flex items-center gap-3 rounded-2xl border border-white/12 bg-ink/92 px-3 py-2.5 shadow-[0_20px_44px_-26px_rgba(18,14,12,0.95)] backdrop-blur-xl transition-all duration-500 sm:gap-5 sm:px-4",
            scrolled && "bg-ink/97",
          )}
        >
          <Link to={ROUTES.dashboard} className="group flex shrink-0 items-center gap-2.5">
            <span className="relative">
              <BridgeMark className="h-9 w-9 rounded-[12px] transition-transform duration-500 group-hover:-rotate-6 sm:h-10 sm:w-10" />
              <span className="absolute inset-0 rounded-[12px] ring-1 ring-white/40" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-semibold tracking-tight text-white sm:text-base">
                Bhasha Setu
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre/85">
                Setu AI
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map(({ to, label, short, Icon }) => {
              const active = path === to;
              return (
                <Link
                  key={to}
                  to={to}
                  aria-label={label}
                  className={cn(
                    "group relative flex items-center gap-2 rounded-xl px-2.5 py-2 text-[12.5px] font-medium transition-all duration-300 lg:px-3 lg:text-[13px]",
                    active
                      ? "bg-paper text-ink shadow-[0_10px_24px_-14px_rgba(0,0,0,0.9)]"
                      : "text-white/70 hover:bg-white/10 hover:text-white",
                  )}
                >
                  <Icon
                    className={cn(
                      "hidden h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 lg:block",
                      active ? "text-clay" : "text-ochre",
                    )}
                  />
                  <span className="xl:hidden">{short}</span>
                  <span className="hidden xl:inline">{label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <div className="hidden items-center gap-2 rounded-xl border border-ochre/35 bg-ochre/12 px-2.5 py-1.5 sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-ochre" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ochre" />
              </span>
              <span className="font-olchiki text-[13px] leading-none text-ochre">
                {MOTHER_TONGUE.script}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
                Santhali
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/12 bg-white/6 py-1 pl-1 pr-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-ochre to-clay text-[11px] font-bold text-ink">
                SD
              </span>
              <span className="hidden leading-none lg:block">
                <span className="block text-[12px] font-semibold text-white">Sunita M.</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-white/45">
                  Teacher
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex gap-1.5 overflow-x-auto hide-scrollbar md:hidden">
          {NAV.map(({ to, label, short, Icon }) => {
            const active = path === to;
            return (
              <Link
                key={to}
                to={to}
                aria-label={label}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md transition-colors",
                  active
                    ? "border-transparent bg-paper text-ink"
                    : "border-white/15 bg-ink/85 text-white/75",
                )}
              >
                <Icon className={cn("h-3.5 w-3.5", active ? "text-clay" : "text-ochre")} />
                {short}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

```

---

## FILE: `src/components/dashboard/ContextBar.tsx`

```tsx
import { CLASSES, SUBJECTS, useTeaching, type ClassLevel, type SubjectId } from "@/lib/store";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconSparkle } from "@/components/ui/Icons";
import { cn } from "@/utils/cn";

const DEVANAGARI_CLASS: Record<ClassLevel, string> = {
  1: "१",
  2: "२",
  3: "३",
  4: "४",
  5: "५",
};

const SUBJECT_ACCENT: Record<SubjectId, { ring: string; text: string; bg: string }> = {
  math: { ring: "border-mid/40", text: "text-mid", bg: "bg-mid" },
  language: { ring: "border-clay/40", text: "text-clay", bg: "bg-clay" },
  evs: { ring: "border-leaf/40", text: "text-leaf", bg: "bg-leaf" },
};

export function ContextBar({ className }: { className?: string }) {
  const { classLevel, setClassLevel, subject, setSubject } = useTeaching();
  const accent = SUBJECT_ACCENT[subject];

  return (
    <Reveal delay={60} className={cn("relative z-30", className)}>
      <div className="overflow-hidden rounded-[28px] glass-light shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-leaf" />
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:p-7">
          {/* class */}
          <div>
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                  Select Class
                </p>
                <p className="font-deva mt-0.5 text-[13px] text-ink/55">अपनी कक्षा चुनें</p>
              </div>
              <span className="hidden items-center gap-1.5 rounded-full bg-ink/[0.05] px-2.5 py-1 text-[11px] font-semibold text-ink/50 sm:inline-flex">
                <IconSparkle className="h-3.5 w-3.5" />
                कक्षा {DEVANAGARI_CLASS[classLevel]} सक्रिय
              </span>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-2.5">
              {CLASSES.map((c) => {
                const active = c === classLevel;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setClassLevel(c)}
                    aria-pressed={active}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border px-1 py-3 text-center transition-all duration-300",
                      active
                        ? "-translate-y-0.5 border-ink bg-ink text-white shadow-[0_16px_30px_-16px_rgba(18,14,12,0.85)]"
                        : "border-ink/10 bg-white/70 text-ink/70 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                    )}
                  >
                    {active && (
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-ochre to-clay" />
                    )}
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] opacity-60">
                      Class
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block font-display text-2xl font-semibold leading-none",
                        active ? "text-ochre" : "text-ink",
                      )}
                    >
                      {c}
                    </span>
                    <span className="font-deva mt-1 block text-[11px] opacity-55">
                      कक्षा {DEVANAGARI_CLASS[c]}
                    </span>
                    {active && (
                      <IconCheck className="absolute right-1.5 top-1.5 h-3.5 w-3.5 text-ochre" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* subject */}
          <div className="lg:border-l lg:border-ink/10 lg:pl-8">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                  Select Subject
                </p>
                <p className="font-deva mt-0.5 text-[13px] text-ink/55">विषय चुनें</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
              {SUBJECTS.map((s) => {
                const active = s.id === subject;
                const a = SUBJECT_ACCENT[s.id];
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSubject(s.id)}
                    aria-pressed={active}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border px-2 py-3 text-left transition-all duration-300",
                      active
                        ? cn("-translate-y-0.5 border-transparent text-white shadow-[0_16px_30px_-16px_rgba(18,14,12,0.7)]", a.bg)
                        : cn("bg-white/70 text-ink/75 hover:-translate-y-0.5 hover:bg-white", a.ring),
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-150",
                          active ? "bg-white" : a.bg,
                        )}
                      />
                      <span className="text-[12px] font-semibold leading-tight sm:text-[13px]">
                        {s.label}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "font-deva mt-1 block text-[12px]",
                        active ? "text-white/80" : "text-ink/50",
                      )}
                    >
                      {s.hindi}
                    </span>
                    <span
                      className={cn(
                        "mt-1 hidden truncate text-[10px] sm:block",
                        active ? "text-white/60" : "text-ink/40",
                      )}
                    >
                      {s.blurb}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={cn("flex flex-wrap items-center gap-2 border-t border-ink/[0.07] bg-white/40 px-5 py-3 sm:px-7", accent.text)}>
          <p className="font-deva text-[12px] text-ink/55">
            आपका चयन पाठ निर्माण और अनुवाद — दोनों में स्वतः लागू होगा।
          </p>
          <span className="ml-auto rounded-full bg-ink/[0.06] px-2.5 py-1 text-[11px] font-semibold text-ink/60">
            Class {classLevel} · {SUBJECTS.find((s) => s.id === subject)?.label}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

```

---

## FILE: `src/components/dashboard/FeatureCards.tsx`

```tsx
import { Link } from "@/lib/router";
import { Reveal } from "@/components/ui/Reveal";
import { useTilt } from "@/components/ui/useTilt";
import { SohraiTile } from "@/components/ui/Culture";
import {
  IconArrowRight,
  IconBook,
  IconCheck,
  IconLanguages,
  IconSwap,
  IconWorksheet,
  IconFlashcards,
} from "@/components/ui/Icons";
import { useTeaching } from "@/lib/store";
import { cn } from "@/utils/cn";

type FeatureCardProps = {
  index: string;
  eyebrow: string;
  title: string;
  hindiTitle: string;
  description: string;
  cta: string;
  to: string;
  ariaLabel: string;
  gradient: string;
  accentText: string;
  accentBorder: string;
  icon: React.ReactNode;
  watermark: React.ReactNode;
  preview: React.ReactNode;
  meta: string;
  delay?: number;
  className?: string;
};

function FeatureCard({
  index,
  eyebrow,
  title,
  hindiTitle,
  description,
  cta,
  to,
  ariaLabel,
  gradient,
  accentText,
  accentBorder,
  icon,
  watermark,
  preview,
  meta,
  delay = 0,
  className,
}: FeatureCardProps) {
  const { ref, onMove, onLeave } = useTilt(6);

  return (
    <Reveal delay={delay} from="scale" className={className}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="tilt group relative"
      >
        <Link
          to={to}
          ariaLabel={ariaLabel}
          className="absolute inset-0 z-20 rounded-[34px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre"
        />

        <article
          className={cn(
            "relative overflow-hidden rounded-[34px] border border-white/12 p-6 text-white shadow-[0_40px_80px_-40px_rgba(10,8,20,0.85)] transition-shadow duration-500 sm:p-8",
            gradient,
          )}
        >
          {/* texture + spotlight */}
          <SohraiTile
            id={`tile-${index}`}
            color="#F7EBD6"
            opacity={0.1}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.16), transparent 62%)",
            }}
          />
          <div className="pointer-events-none absolute -right-10 -top-12 h-52 w-52 rounded-full bg-white/12 blur-3xl transition-all duration-700 group-hover:bg-white/20" />

          {/* watermark icon */}
          <div className="pointer-events-none absolute -bottom-8 -right-6 opacity-[0.13] transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:rotate-6">
            {watermark}
          </div>

          {/* header row */}
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3 sm:h-16 sm:w-16">
                {icon}
              </span>
              <div>
                <p
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.26em]",
                    accentText,
                  )}
                >
                  {index}
                </p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                  {eyebrow}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "hidden rounded-full border px-3 py-1.5 text-[11px] font-semibold sm:inline-flex",
                accentBorder,
                accentText,
              )}
            >
              {meta}
            </span>
          </div>

          {/* title */}
          <h3 className="relative mt-7 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            {title}
          </h3>
          <p className="font-deva relative mt-1 text-[14px] text-white/55">{hindiTitle}</p>

          <p className="relative mt-4 max-w-md text-[14.5px] leading-relaxed text-white/72 sm:text-[15.5px]">
            {description}
          </p>

          {/* preview panel */}
          <div className="relative mt-7">{preview}</div>

          {/* CTA */}
          <div className="relative mt-7 flex items-center gap-3">
            <span className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-paper px-5 py-3 text-[14px] font-bold text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_40px_-18px_rgba(251,245,236,0.6)]">
              <span className="absolute inset-y-0 -left-full w-1/3 bg-white/80 blur-md group-hover:animate-shine" />
              {cta}
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="hidden items-center gap-1.5 text-[12px] font-medium text-white/45 sm:inline-flex">
              <IconCheck className="h-3.5 w-3.5" />
              Offline-ready draft
            </span>
          </div>
        </article>
      </div>
    </Reveal>
  );
}

/* ── previews ─────────────────────────────────────────────── */

function LessonPreview() {
  const { classLevel, subjectMeta } = useTeaching();
  const rows = [
    { label: "सीखने का उद्देश्य", w: "88%" },
    { label: "सरल व्याख्या", w: "96%" },
    { label: "कक्षा गतिविधि", w: "74%" },
    { label: "अभ्यास प्रश्न", w: "82%" },
    { label: "लघु मूल्यांकन", w: "64%" },
  ];

  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">
          Class {classLevel} · {subjectMeta.label}
        </span>
        <span className="font-deva text-[11px] text-white/45">पाठ योजना संरचना</span>
      </div>
      <div className="mt-3.5 space-y-2.5">
        {rows.map((row, i) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-ochre/20 text-[10px] font-bold text-ochre">
              {i + 1}
            </span>
            <span className="font-deva w-[46%] shrink-0 truncate text-[12px] text-white/70">
              {row.label}
            </span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-ochre to-clay transition-all duration-1000 ease-out group-hover:opacity-100"
                style={{ width: row.w, opacity: 0.75 }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TranslationPreview() {
  const rows = [
    { hindi: "पानी", santhali: "ᱫᱟᱜ", roman: "dag" },
    { hindi: "मिट्टी", santhali: "ᱦᱟᱥᱟ", roman: "hasa" },
    { hindi: "गाँव", santhali: "ᱟᱹᱛᱩ", roman: "atu" },
  ];

  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">
          <IconSwap className="h-3 w-3" />
          Ol Chiki
        </span>
        <span className="text-[11px] text-white/45">शब्द-स्तर अनुवाद</span>
      </div>
      <div className="mt-3.5 space-y-2">
        {rows.map((row) => (
          <div
            key={row.hindi}
            className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2"
          >
            <span className="font-deva text-[13px] text-white/75">{row.hindi}</span>
            <IconArrowRight className="h-3 w-3 text-white/30" />
            <span className="font-olchiki text-[14px] text-ochre">{row.santhali}</span>
            <span className="ml-auto text-[10px] uppercase tracking-[0.14em] text-white/30">
              {row.roman}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-[64%] rounded-full bg-gradient-to-r from-leaf to-ochre" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
          64% auto-matched
        </span>
      </div>
    </div>
  );
}

function WorksheetPreview() {
  const { classLevel, subjectMeta } = useTeaching();
  const rows = [
    { n: 1, w: "88%" },
    { n: 2, w: "70%" },
    { n: 3, w: "80%" },
    { n: 4, w: "62%" },
  ];

  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">
          Class {classLevel} · {subjectMeta.label}
        </span>
        <span className="font-deva text-[11px] text-white/45">अभ्यास पत्रिका</span>
      </div>
      <div className="mt-3.5 space-y-2.5">
        {rows.map((row) => (
          <div key={row.n} className="flex items-center gap-2.5">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border border-white/20 text-[10px] font-bold text-white/60">
              {row.n}
            </span>
            <span className="h-3 flex-1 rounded-[3px] border-b border-white/15 bg-white/[0.06]">
              <span
                className="mt-[3px] block h-px bg-white/25"
                style={{ width: row.w }}
              />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="font-deva text-[10px] text-white/40">उत्तरमाला शामिल</span>
        <span className="ml-auto rounded-full border border-leaf/40 bg-leaf/15 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-white/80">
          Answer key
        </span>
      </div>
    </div>
  );
}

function FlashcardPreview() {
  const { classLevel, subjectMeta } = useTeaching();
  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">
          Class {classLevel} · {subjectMeta.label}
        </span>
        <span className="font-deva text-[11px] text-white/45">फ़्लैशकार्ड</span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="grid h-16 w-12 place-items-center rounded-xl border border-white/20 bg-gradient-to-br from-white/20 to-white/5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60"
            style={{
              transform: `rotate(${(i - 1) * 6}deg) translateY(${i === 1 ? -4 : 2}px)`,
            }}
          >
            {i === 1 ? "Q" : ""}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-deva text-[10.5px] text-white/40">पलटकर उत्तर देखें</span>
        <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-white/75">
          Card 2 of 10
        </span>
      </div>
    </div>
  );
}

/* ── section ──────────────────────────────────────────────── */

export function FeatureCards() {
  return (
    <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-clay" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-clay">
              Two capabilities
            </span>
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink">
            What do you{" "}
            <span className="text-gradient-ink">want to do</span> today?
          </h2>
          <p className="font-deva mt-3 text-[15px] text-ink/55">
            आज आप क्या करना चाहती हैं? — नया पाठ बनाइए, हिन्दी सामग्री का अनुवाद कीजिए, या
            अभ्यास पत्रिका तैयार कीजिए।
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          <FeatureCard
            index="01"
            eyebrow="Hindi lesson plans"
            title="Lesson Generator"
            hindiTitle="पाठ जनरेटर"
            description="Create structured Hindi lessons for your primary FLN classroom — objective, simple explanation, activity, practice and assessment."
            cta="Generate Lesson"
            to="/lesson-generator"
            ariaLabel="Open Lesson Generator"
            meta="Class 1–5"
            delay={80}
            gradient="bg-[linear-gradient(150deg,#33417c_0%,#202a5c_48%,#0e1330_100%)]"
            accentText="text-ochre"
            accentBorder="border-ochre/35 bg-ochre/10"
            icon={<IconBook className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />}
            watermark={
              <IconBook className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />
            }
            preview={<LessonPreview />}
          />

          <FeatureCard
            index="02"
            eyebrow="Hindi → Santhali"
            title="Translation Studio"
            hindiTitle="अनुवाद स्टूडियो"
            description="Translate Hindi educational content into Santhali in Ol Chiki script — line by line, with teacher-controlled review before it reaches the classroom."
            cta="Open Translation Studio"
            to="/translation-studio"
            ariaLabel="Open Translation Studio"
            meta="Ol Chiki"
            delay={180}
            gradient="bg-[linear-gradient(150deg,#a83c1f_0%,#c1502e_46%,#5c1d10_100%)]"
            accentText="text-ochre"
            accentBorder="border-ochre/40 bg-ochre/12"
            icon={<IconLanguages className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />}
            watermark={
              <IconLanguages className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />
            }
            preview={<TranslationPreview />}
          />

          <FeatureCard
            index="03"
            eyebrow="Printable practice"
            title="Worksheet Generator"
            hindiTitle="अभ्यास पत्रिका"
            description="Create printable Hindi worksheets for your primary FLN classroom — questions, answer space and a teacher-only answer key."
            cta="Generate Worksheet"
            to="/worksheet-generator"
            ariaLabel="Open Worksheet Generator"
            meta="Class 1–5"
            delay={260}
            gradient="bg-[linear-gradient(150deg,#2e6b4f_0%,#1f4a37_46%,#0c2419_100%)]"
            accentText="text-ochre"
            accentBorder="border-ochre/35 bg-ochre/10"
            icon={<IconWorksheet className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />}
            watermark={
              <IconWorksheet className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />
            }
            preview={<WorksheetPreview />}
          />

          <FeatureCard
            index="04"
            eyebrow="Flip & recall"
            title="Flashcard Generator"
            hindiTitle="फ़्लैशकार्ड"
            description="Create a deck of Hindi flashcards for your primary FLN classroom — flip each card to reveal the answer, then review the whole set."
            cta="Generate Flashcards"
            to="/flashcard-generator"
            ariaLabel="Open Flashcard Generator"
            meta="Class 1–5"
            delay={340}
            gradient="bg-[linear-gradient(150deg,#7a3a86_0%,#4d2357_48%,#1c0d21_100%)]"
            accentText="text-ochre"
            accentBorder="border-ochre/35 bg-ochre/10"
            icon={<IconFlashcards className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />}
            watermark={
              <IconFlashcards className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />
            }
            preview={<FlashcardPreview />}
          />
        </div>
      </div>
    </section>
  );
}

```

---

## FILE: `src/components/dashboard/Hero.tsx`

```tsx
import { useEffect, useRef } from "react";
import collage from "@/assets/jharkhand-collage.jpg";
import { Link, ROUTES } from "@/lib/router";
import { useTeaching } from "@/lib/store";
import { SohraiTile, SohraiBand, SunMotif } from "@/components/ui/Culture";
import { TextReveal, Reveal } from "@/components/ui/Reveal";
import {
  IconArrowRight,
  IconBook,
  IconCheck,
  IconLanguages,
  IconPin,
  IconSwap,
} from "@/components/ui/Icons";

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const { classLevel, subjectMeta } = useTeaching();

  useEffect(() => {
    const node = parallaxRef.current;
    if (!node) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = Math.min(window.scrollY, 900);
        node.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(${1 + y * 0.0001})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-paper text-ink">
      {/* ── full-width Jharkhand background ─────────────────── */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
          <img
            src={collage}
            alt="Cultural collage of Jharkhand — Sohrai elephants, Paitkar scroll, Santhal dancers, sal trees, village huts and a farmer at work"
            className="h-full w-full animate-drift object-cover object-center"
          />
        </div>
      </div>

      {/* readable wash: strong on the left, image breathes on the right */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(251,245,236,0.97)_0%,rgba(251,245,236,0.94)_36%,rgba(251,245,236,0.62)_58%,rgba(251,245,236,0.06)_82%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-paper via-paper/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-paper via-paper/85 to-transparent" />
      <SohraiTile
        id="hero-tile"
        color="#8C2F1B"
        opacity={0.06}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="pointer-events-none absolute -left-24 top-32 -z-10 h-72 w-72 animate-glow rounded-full bg-ochre/25 blur-[110px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-64 w-64 animate-glow rounded-full bg-clay/15 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
          {/* ── glass content panel with brand / message ────── */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-ink/[0.08] bg-white/62 p-6 shadow-lift backdrop-blur-xl sm:p-8 lg:p-9">
              <SohraiBand
                color="#C1502E"
                opacity={0.3}
                className="absolute inset-x-7 top-0 h-6"
              />

              <Reveal from="left" className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-clay/25 bg-clay/[0.07] px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-clay" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-clay" />
                  </span>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-clay-2">
                    Mother-tongue learning
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                  <IconPin className="h-3.5 w-3.5 text-clay" />
                  Jharkhand
                </span>
              </Reveal>

              <h1 className="mt-5 font-display text-[clamp(2.9rem,7.6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
                <TextReveal text="Bhasha" delay={120} />
                <br />
                <span className="text-gradient-ink">
                  <TextReveal text="Setu" delay={250} />
                </span>
              </h1>

              <Reveal delay={460} className="mt-4 flex items-center gap-3">
                <span className="h-px w-9 bg-gradient-to-r from-clay to-transparent" />
                <p className="font-display text-[15px] italic tracking-tight text-clay-2 sm:text-[17px]">
                  Bridging Languages. Empowering Classrooms.
                </p>
              </Reveal>

              <Reveal delay={540}>
                <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink/65 sm:text-[16px]">
                  Bhasha Setu helps teachers{" "}
                  <span className="font-semibold text-ink">create</span> structured Hindi
                  lessons and <span className="font-semibold text-ink">translate</span>{" "}
                  existing content into{" "}
                  <span className="font-olchiki text-clay-2">ᱥᱟᱱᱛᱟᱲᱤ</span> — so children
                  learn first in the language they think in.
                </p>
              </Reveal>

              <Reveal delay={640} className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to={ROUTES.lessonGenerator}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-18px_rgba(18,14,12,0.85)]"
                >
                  <span className="absolute inset-y-0 -left-full w-1/3 bg-white/30 blur-md transition-transform duration-700 group-hover:animate-shine" />
                  <IconBook className="h-[18px] w-[18px] text-ochre transition-transform duration-300 group-hover:scale-110" />
                  Generate Lesson
                  <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to={ROUTES.translationStudio}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-ink/14 bg-white/80 px-6 py-3.5 text-[14.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/45 hover:bg-white"
                >
                  <IconLanguages className="h-[18px] w-[18px] text-clay" />
                  Open Translation Studio
                </Link>
              </Reveal>

              <Reveal delay={720} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  { k: "Classes", v: "1 – 5" },
                  { k: "Subjects", v: "3" },
                  { k: "Flow", v: "हिन्दी → ᱥᱟᱱᱛᱟᱲᱤ" },
                ].map((item) => (
                  <div key={item.k} className="flex items-baseline gap-2">
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-ink/40">
                      {item.k}
                    </span>
                    <span className="font-deva text-[13.5px] font-semibold text-ink/85">
                      {item.v}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* floating live-translate chip */}
            <div
              className="absolute -bottom-7 right-3 hidden animate-bob items-center gap-2 rounded-2xl border border-ink/[0.08] bg-white px-3.5 py-3 shadow-lift sm:flex lg:-right-5"
              style={{ animationDelay: "0.9s" }}
            >
              <IconSwap className="h-4 w-4 text-clay" />
              <span className="font-deva text-[13px] font-semibold text-ink">हिन्दी</span>
              <IconArrowRight className="h-3.5 w-3.5 text-ink/25" />
              <span className="font-olchiki text-[14px] font-semibold text-clay-2">ᱫᱟᱜ</span>
              <span className="ml-1 border-l border-ink/10 pl-2 text-[10px] uppercase tracking-[0.14em] text-ink/40">
                water
              </span>
            </div>
          </div>

          {/* ── layered arch visual (crop of the collage) ───── */}
          <Reveal from="right" delay={200} className="relative mx-auto w-full max-w-[520px]">
            <div className="relative">
              <SunMotif className="absolute -right-5 -top-9 h-24 w-24 animate-spin-slower text-clay/40 sm:h-32 sm:w-32" />

              <div className="group relative overflow-hidden rounded-t-[150px] rounded-b-[30px] border border-ink/10 shadow-[0_50px_90px_-45px_rgba(18,14,12,0.75)]">
                <img
                  src={collage}
                  alt="Detail of the Jharkhand collage — Santhal dancers and a Paitkar scroll"
                  className="h-[360px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08] sm:h-[440px]"
                  style={{ objectPosition: "68% 42%" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,14,12,0.82)_0%,rgba(18,14,12,0.12)_46%,rgba(18,14,12,0.3)_100%)]" />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/12 px-4 py-3 backdrop-blur-md">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-ochre">
                    Rooted in Jharkhand
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-white/85">
                    Sohrai wall art, Santhal dance and village life — the world your classroom
                    already knows.
                  </p>
                </div>
              </div>

              {/* floating lesson-ready card */}
              <div className="absolute -left-3 top-12 hidden w-[182px] animate-bob rounded-2xl border border-ink/[0.08] bg-white/95 p-3.5 shadow-lift backdrop-blur-md sm:block">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-leaf">
                    <IconCheck className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-[12px] font-bold text-ink">Lesson ready</span>
                </div>
                <div className="mt-2.5 space-y-1.5">
                  {[92, 74, 58].map((w, i) => (
                    <span
                      key={i}
                      className="block h-1.5 rounded-full bg-ink/12"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
                <p className="font-deva mt-2.5 text-[11px] text-clay-2">
                  कक्षा {classLevel} · पाठ योजना
                </p>
              </div>

              {/* active context chip */}
              <div
                className="absolute -bottom-5 right-4 flex animate-bob items-center gap-2 rounded-2xl bg-ink px-3.5 py-2.5 text-white shadow-lift sm:right-8"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-ochre text-[11px] font-bold text-ink">
                  {classLevel}
                </span>
                <span className="text-[12px] font-semibold">
                  Class {classLevel} · {subjectMeta.label}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

```

---

## FILE: `src/components/dashboard/LanguageIndicator.tsx`

```tsx
import { MOTHER_TONGUE } from "@/lib/store";
import { GLOSSARY } from "@/lib/glossary";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand } from "@/components/ui/Culture";
import { IconArrowRight, IconSwap, IconLayers } from "@/components/ui/Icons";

const TICKER = GLOSSARY.slice(0, 16);

export function LanguageIndicator() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ochre/70 to-transparent" />
      <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 animate-glow rounded-full bg-clay/25 blur-[120px]" />

      {/* glossary ticker — transition strip from the hero */}
      <div className="relative border-b border-white/10 bg-black/25 py-2.5">
        <div className="flex w-max animate-ticker items-center gap-8 pl-4">
          {[...TICKER, ...TICKER].map((entry, i) => (
            <span key={`${entry.hindi}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-deva text-[13px] text-white/65">{entry.hindi}</span>
              <IconArrowRight className="h-3 w-3 text-white/25" />
              <span className="font-olchiki text-[14px] text-ochre/90">{entry.santhali}</span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/25">
                {entry.roman}
              </span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-28 pt-12 sm:px-6 sm:pt-14">
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
              Mother Tongue / Target Language
            </p>

            <div className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="font-display text-[clamp(2.2rem,5.5vw,3.4rem)] font-semibold leading-none tracking-[-0.02em]">
                {MOTHER_TONGUE.name}
              </h2>
              <span className="font-olchiki text-[clamp(1.8rem,4.6vw,2.8rem)] leading-none text-gradient-clay">
                {MOTHER_TONGUE.script}
              </span>
            </div>

            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
              This prototype is built for <span className="text-white">{MOTHER_TONGUE.name}</span>{" "}
              ({MOTHER_TONGUE.scriptName} script) across Classes 1–5. Hindi is the source
              language of instruction.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-xl border border-ochre/40 bg-ochre/12 px-3 py-1.5 text-[12px] font-semibold text-ochre">
                <IconLayers className="h-3.5 w-3.5" />
                Current prototype focus
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/60">
                Source · <span className="font-deva text-white/90">{MOTHER_TONGUE.sourceScript}</span>{" "}
                {MOTHER_TONGUE.source}
              </span>
            </div>
          </div>

          {/* flow visual */}
          <div className="relative">
            <SohraiBand
              color="#DFA03C"
              opacity={0.22}
              className="absolute -top-6 left-0 h-8 w-40"
            />
            <div className="rounded-3xl border border-white/12 bg-white/[0.045] p-5 backdrop-blur-md sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                Translation flow
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-center">
                  <p className="font-deva text-xl font-semibold leading-none">हिन्दी</p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Source
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ochre to-clay text-ink shadow-lg">
                  <IconSwap className="h-4 w-4" />
                </span>
                <div className="flex-1 rounded-2xl border border-ochre/35 bg-ochre/12 px-4 py-3 text-center">
                  <p className="font-olchiki text-xl font-semibold leading-none text-ochre">
                    ᱥᱟᱱᱛᱟᱲᱤ
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Target
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {GLOSSARY.slice(0, 4).map((entry) => (
                  <div
                    key={entry.hindi}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 text-center"
                  >
                    <p className="font-deva text-[13px] text-white/85">{entry.hindi}</p>
                    <IconArrowRight className="mx-auto my-0.5 h-3 w-3 text-white/25" />
                    <p className="font-olchiki text-[14px] text-ochre">{entry.santhali}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

    </section>
  );
}

```

---

## FILE: `src/components/flashcard/FlashcardForm.tsx`

```tsx
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand } from "@/components/ui/Culture";
import { IconArrowRight, IconCheck, IconSparkle } from "@/components/ui/Icons";
import { CLASSES, SUBJECTS, type ClassLevel, type SubjectId } from "@/lib/store";
import { topicIdeas, SUBJECT_HINDI } from "@/lib/lesson";
import { cn } from "@/utils/cn";

const CARD_COUNTS = [5, 10, 15, 20] as const;

function Field({
  label,
  hindi,
  htmlFor,
  children,
}: {
  label: string;
  hindi: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <label
          htmlFor={htmlFor}
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45"
        >
          {label}
        </label>
        <span className="font-deva text-[12px] text-ink/45">{hindi}</span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

const selectBase =
  "w-full appearance-none rounded-2xl border border-ink/12 bg-white px-4 py-3.5 pr-11 text-[14.5px] font-semibold text-ink outline-none transition-all duration-300 focus:border-clay/50 focus:ring-4 focus:ring-clay/10 hover:border-ink/20";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function FlashcardForm({
  classLevel,
  onClassChange,
  subject,
  onSubjectChange,
  topic,
  onTopicChange,
  cardCount,
  onCardCountChange,
  onSubmit,
  loading,
  hasResult,
}: {
  classLevel: ClassLevel;
  onClassChange: (c: ClassLevel) => void;
  subject: SubjectId;
  onSubjectChange: (s: SubjectId) => void;
  topic: string;
  onTopicChange: (t: string) => void;
  cardCount: number;
  onCardCountChange: (n: number) => void;
  onSubmit: () => void;
  loading: boolean;
  hasResult: boolean;
}) {
  const ideas = topicIdeas(subject, classLevel);
  const canSubmit = !loading && topic.trim().length > 0;

  return (
    <Reveal from="left" className="lg:sticky lg:top-24 lg:self-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSubmit) onSubmit();
        }}
        className="overflow-hidden rounded-[26px] glass-light shadow-lift"
      >
        <div className="h-1 w-full bg-gradient-to-r from-mid via-clay to-ochre" />

        <div className="space-y-6 p-5 sm:p-6">
          <div className="rounded-2xl border border-leaf/20 bg-leaf/[0.06] px-3.5 py-3">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-leaf">
              <IconCheck className="h-3.5 w-3.5" />
              Primary FLN Classroom
            </p>
            <p className="font-deva mt-1 text-[12.5px] leading-snug text-ink/55">
              कक्षा 1–5 के लिए याददाश्त और अभ्यास कार्ड।
            </p>
          </div>

          <Field label="Select Class" hindi="कक्षा चुनें" htmlFor="fc-class">
            <div className="relative">
              <select
                id="fc-class"
                value={classLevel}
                onChange={(e) => onClassChange(Number(e.target.value) as ClassLevel)}
                className={selectBase}
              >
                {CLASSES.map((c) => (
                  <option key={c} value={c}>
                    Class {c}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
          </Field>

          <Field label="Select Subject" hindi="विषय चुनें" htmlFor="fc-subject">
            <div className="relative">
              <select
                id="fc-subject"
                value={subject}
                onChange={(e) => onSubjectChange(e.target.value as SubjectId)}
                className={selectBase}
              >
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
            <p className="font-deva mt-1.5 text-[11.5px] text-ink/40">
              {SUBJECT_HINDI[subject]} · कक्षा {classLevel}
            </p>
          </Field>

          <Field label="Flashcard Topic" hindi="विषय-वस्तु" htmlFor="fc-topic">
            <input
              id="fc-topic"
              type="text"
              value={topic}
              onChange={(e) => onTopicChange(e.target.value)}
              placeholder="Enter a flashcard topic..."
              autoComplete="off"
              className="font-deva w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:font-sans placeholder:text-[14px] placeholder:text-ink/35 focus:border-clay/50 focus:ring-4 focus:ring-clay/10"
            />
          </Field>

          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/35">
              Suggestions
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {ideas.map((idea) => (
                <button
                  key={idea}
                  type="button"
                  onClick={() => onTopicChange(idea)}
                  className={cn(
                    "font-deva rounded-full border px-3 py-1.5 text-[12.5px] transition-all duration-300",
                    topic === idea
                      ? "-translate-y-0.5 border-transparent bg-ink text-white"
                      : "border-ink/12 bg-white/70 text-ink/65 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                  )}
                >
                  {idea}
                </button>
              ))}
            </div>
          </div>

          <Field label="Cards" hindi="कार्डों की संख्या" htmlFor="fc-count">
            <div className="grid grid-cols-4 gap-2">
              {CARD_COUNTS.map((n) => {
                const active = n === cardCount;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => onCardCountChange(n)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-xl border py-2.5 text-[14px] font-bold transition-all duration-300",
                      active
                        ? "-translate-y-0.5 border-transparent bg-ink text-ochre shadow-md"
                        : "border-ink/12 bg-white/70 text-ink/65 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                    )}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
            <p className="mt-1.5 text-[11.5px] leading-snug text-ink/40">
              Requested count — the backend decides what it returns.
            </p>
          </Field>

          <button
            type="submit"
            disabled={!canSubmit}
            aria-busy={loading}
            className={cn(
              "group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-5 py-4 text-[15px] font-bold transition-all duration-300",
              loading
                ? "cursor-wait bg-ink/85 text-white"
                : canSubmit
                  ? "bg-ink text-white hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-18px_rgba(18,14,12,0.9)]"
                  : "cursor-not-allowed bg-ink/25 text-white/70",
            )}
          >
            {canSubmit && !loading && (
              <span className="absolute inset-y-0 -left-full w-1/3 bg-white/25 blur-md transition-transform duration-700 group-hover:animate-shine" />
            )}
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-ochre" />
                <span className="font-deva">तैयार कर रहे हैं…</span>
              </>
            ) : (
              <>
                <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
                Generate Flashcards
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="font-deva text-center text-[11.5px] leading-snug text-ink/40">
            {hasResult
              ? "नया सेट बनाने पर मौजूदा सेट बदल जाएगा।"
              : "कार्ड हिन्दी माध्यम में तैयार होंगे।"}
          </p>
        </div>

        <div className="relative border-t border-ink/[0.07] bg-white/50 px-5 py-3.5 sm:px-6">
          <SohraiBand color="#C1502E" opacity={0.18} className="absolute inset-x-5 top-0 h-4" />
          <p className="mt-2 text-[11.5px] leading-snug text-ink/45">
            For teachers · शिक्षकों के लिए — आपको तकनीकी जानकारी भरने की आवश्यकता नहीं है।
          </p>
        </div>
      </form>
    </Reveal>
  );
}

```

---

## FILE: `src/components/flashcard/FlashcardResult.tsx`

```tsx
import { useCallback, useEffect, useState } from "react";
import type { FlashcardSet } from "@/services/flashcard";
import { flashcardsToPlainText } from "@/services/flashcard";
import { Reveal } from "@/components/ui/Reveal";
import { BridgeMark, SohraiTile } from "@/components/ui/Culture";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconCopy,
  IconDownload,
  IconFlashcards,
} from "@/components/ui/Icons";
import { cn } from "@/utils/cn";

function CardFace({
  side,
  text,
  note,
  hasBack,
}: {
  side: "front" | "back";
  text: string;
  note: string;
  hasBack: boolean;
}) {
  const isBack = side === "back";
  return (
    <div
      className={cn(
        "flip-face overflow-hidden rounded-[28px] p-7 sm:p-9",
        isBack
          ? "flip-face-back bg-[linear-gradient(150deg,#a83c1f_0%,#c1502e_46%,#5c1d10_100%)] text-white"
          : "bg-[linear-gradient(150deg,#fdfaf4_0%,#f4e9d8_100%)] text-ink",
      )}
    >
      <SohraiTile
        id={`fc-${side}`}
        color={isBack ? "#F7EBD6" : "#8C2F1B"}
        opacity={isBack ? 0.1 : 0.06}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em]",
              isBack ? "bg-white/15 text-ochre" : "bg-clay/10 text-clay-2",
            )}
          >
            {isBack ? "पीछे · Back" : "सामने · Front"}
          </span>
          <BridgeMark className={cn("h-6 w-6 rounded-lg", isBack ? "opacity-90" : "opacity-70")} />
        </div>

        <div className="flex flex-1 items-center justify-center py-8">
          <p
            className={cn(
              "text-center font-display text-[clamp(1.5rem,4.6vw,2.5rem)] font-semibold leading-[1.25] tracking-[-0.01em]",
              isBack ? "text-white" : "text-ink",
            )}
          >
            {text}
          </p>
        </div>

        {note && (
          <p
            className={cn(
              "text-center text-[12.5px] uppercase tracking-[0.14em]",
              isBack ? "text-white/55" : "text-ink/45",
            )}
          >
            {note}
          </p>
        )}

        <p
          className={cn(
            "mt-3 text-center text-[11px] font-medium uppercase tracking-[0.16em]",
            isBack ? "text-white/40" : "text-ink/35",
          )}
        >
          {hasBack ? "कार्ड पलटने के लिए दबाएँ" : ""}
        </p>
      </div>
    </div>
  );
}

export function FlashcardResult({ set }: { set: FlashcardSet }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const total = set.cards.length;
  const card = set.cards[Math.min(index, total - 1)];
  const hasBack = Boolean(card?.back);

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const flip = useCallback(() => {
    if (hasBack) setFlipped((v) => !v);
  }, [hasBack]);

  // reset when a new deck arrives
  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [set]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === " " || e.key === "Enter") {
        if (document.activeElement?.tagName === "BUTTON") return;
        e.preventDefault();
        flip();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, flip]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(flashcardsToPlainText(set));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const download = () => {
    const blob = new Blob([flashcardsToPlainText(set)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bhasha-setu-class-${set.classLevel}-flashcards.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      {/* header */}
      <Reveal delay={40}>
        <div className="relative overflow-hidden rounded-[26px] bg-ink px-6 py-5 text-white sm:px-8">
          <SohraiTile
            id="fc-result-head"
            color="#F3E7D2"
            opacity={0.08}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ochre">
                <IconFlashcards className="h-3.5 w-3.5" />
                AI-generated Hindi flashcards
              </p>
              <h1 className="font-deva mt-2 text-[1.4rem] font-semibold leading-snug sm:text-[1.7rem]">
                {set.title}
              </h1>
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                  कक्षा {set.classLevel} · Class {set.classLevel}
                </span>
                <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                  {set.subject === "Mathematics"
                    ? "गणित · Mathematics"
                    : set.subject === "Language"
                      ? "भाषा · Language"
                      : "पर्यावरण अध्ययन · EVS"}
                </span>
                <span className="rounded-lg border border-ochre/35 bg-ochre/12 px-2.5 py-1 text-[11.5px] font-semibold text-ochre">
                  {total} कार्ड
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 print:hidden">
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
              >
                {copied ? (
                  <IconCheck className="h-4 w-4 text-leaf" />
                ) : (
                  <IconCopy className="h-4 w-4 text-ochre" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
              <button
                type="button"
                onClick={download}
                className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
              >
                <IconDownload className="h-4 w-4 text-ochre" />
                Download
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* the card */}
      <Reveal delay={100}>
        <div className="flip-scene mx-auto h-[340px] w-full max-w-2xl sm:h-[380px]">
          <div
            className={cn("flip-inner cursor-pointer", flipped && "is-flipped")}
            onClick={flip}
            role="button"
            tabIndex={0}
            aria-label={
              hasBack
                ? flipped
                  ? "Show front of card"
                  : "Show back of card"
                : "Flashcard front"
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                flip();
              }
            }}
          >
            <div className="flip-face shadow-lift">
              <CardFace
                side="front"
                text={card.front}
                note={card.note}
                hasBack={hasBack}
              />
            </div>
            <div className="flip-face shadow-lift">
              <CardFace
                side="back"
                text={hasBack ? card.back : ""}
                note=""
                hasBack={hasBack}
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* controls */}
      <Reveal delay={140}>
        <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center gap-3 print:hidden">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous card"
            className="group grid h-12 w-12 place-items-center rounded-2xl border border-ink/12 bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40"
          >
            <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <div className="flex min-w-[168px] flex-col items-center rounded-2xl border border-ink/[0.08] bg-white px-5 py-2.5">
            <span className="font-display text-[17px] font-semibold text-ink">
              Card {index + 1} of {total}
            </span>
            <span className="font-deva mt-0.5 text-[11px] text-ink/45">
              कार्ड {index + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next card"
            className="group grid h-12 w-12 place-items-center rounded-2xl border border-ink/12 bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40"
          >
            <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </Reveal>

      {/* progress dots */}
      <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center gap-1.5 print:hidden">
        {set.cards.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setFlipped(false);
              setIndex(i);
            }}
            aria-label={`Go to card ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-7 bg-clay" : "w-3 bg-ink/15 hover:bg-ink/30",
            )}
          />
        ))}
      </div>

      {/* list view — real data only */}
      <Reveal delay={180}>
        <div className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
          <div className="flex items-center gap-2.5 border-b border-ink/[0.07] px-6 py-4 sm:px-8">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-ochre/25 to-clay/20">
              <IconFlashcards className="h-4 w-4 text-clay-2" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/55">
                All cards
              </p>
              <p className="font-deva text-[12px] text-ink/45">सभी कार्ड</p>
            </div>
          </div>
          <ol className="divide-y divide-ink/[0.06]">
            {set.cards.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 px-6 py-3.5 transition-colors duration-300 hover:bg-paper sm:px-8"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-ink/[0.06] text-[10px] font-bold text-ink/45">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-deva text-[14.5px] leading-relaxed text-ink/85">
                    {c.front}
                  </p>
                  {c.back && (
                    <p className="font-deva mt-1 text-[13.5px] leading-relaxed text-clay-2">
                      → {c.back}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </div>
  );
}

```

---

## FILE: `src/components/flashcard/FlashcardStates.tsx`

```tsx
import collage from "@/assets/jharkhand-collage.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand, SohraiTile } from "@/components/ui/Culture";
import { IconFlashcards, IconSparkle } from "@/components/ui/Icons";
import { getApiBaseUrl } from "@/services/schema";
import { FLASHCARD_GENERATE_PATH } from "@/services/flashcard";

const LOAD_STAGES = [
  "आपकी कक्षा और विषय समझ रहे हैं…",
  "सामने और पीछे का भाग बना रहे हैं…",
  "शब्द और अर्थ जोड़ रहे हैं…",
  "कार्डों को अंतिम रूप दे रहे हैं…",
];

/* ── empty ───────────────────────────────────────────────────────────────── */

export function FlashcardEmptyState() {
  return (
    <Reveal delay={80}>
      <div className="relative overflow-hidden rounded-[26px] border border-dashed border-ink/15 bg-white/70 shadow-lift">
        <SohraiBand color="#C1502E" opacity={0.22} className="h-7 w-full" />

        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage: `url(${collage})`,
              backgroundSize: "cover",
              backgroundPosition: "60% 45%",
              maskImage:
                "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)",
            }}
          />
          <SohraiTile
            id="fc-empty-tile"
            color="#8C2F1B"
            opacity={0.05}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />

          {/* stacked deck illustration */}
          <div className="relative mx-auto h-28 w-40">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute left-1/2 top-0 h-24 w-32 -translate-x-1/2 rounded-2xl border border-ink/12 bg-white/90 shadow-lift"
                style={{
                  transform: `translateX(-50%) rotate(${(i - 1) * 5}deg) translateY(${i * 5}px)`,
                  opacity: 1 - i * 0.18,
                  zIndex: 3 - i,
                }}
              />
            ))}
            <span className="absolute left-1/2 top-0 z-10 grid h-24 w-32 -translate-x-1/2 place-items-center rounded-2xl bg-gradient-to-br from-ochre to-clay text-white shadow-[0_22px_44px_-20px_rgba(193,80,46,0.8)]">
              <IconFlashcards className="h-10 w-10" />
            </span>
          </div>

          <h2 className="relative mt-8 font-display text-[1.55rem] font-semibold tracking-tight text-ink sm:text-[1.9rem]">
            Your flashcards will appear here
          </h2>
          <p className="font-deva relative mx-auto mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">
            बाईं ओर कक्षा, विषय और विषय-वस्तु चुनकर «Generate Flashcards» दबाएँ। आपके लिए
            हिन्दी फ़्लैशकार्ड तैयार होंगे — जिन्हें आप कक्षा में पलटकर दिखा सकती हैं।
          </p>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-2.5 text-left sm:grid-cols-2">
            {[
              { side: "सामने", desc: "प्रश्न / शब्द / संकल्पना" },
              { side: "पीछे", desc: "उत्तर / अर्थ / व्याख्या" },
            ].map((row) => (
              <div
                key={row.side}
                className="rounded-2xl border border-ink/[0.07] bg-white/85 px-4 py-3.5"
              >
                <p className="font-deva text-[12px] font-bold uppercase tracking-[0.14em] text-clay">
                  {row.side}
                </p>
                <p className="font-deva mt-1 text-[13.5px] text-ink/65">{row.desc}</p>
              </div>
            ))}
          </div>

          <p className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[12px] font-medium text-ink/50">
            <IconSparkle className="h-3.5 w-3.5 text-clay" />
            Designed for primary FLN classrooms · प्राथमिक FLN कक्षा के लिए
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ── loading ─────────────────────────────────────────────────────────────── */

export function FlashcardLoader({ stage }: { stage: number }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      <div className="relative overflow-hidden bg-ink px-6 py-10 text-white sm:px-8">
        <SohraiBand color="#DFA03C" opacity={0.16} className="absolute inset-x-0 top-0 h-6" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-clay/30 blur-[80px]" />

        {/* soundwave bars */}
        <div className="relative mx-auto flex h-24 w-full max-w-sm items-center justify-center gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => {
            const delay = (i % 7) * 0.13;
            return (
              <span
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-clay to-ochre"
                style={{
                  height: "18px",
                  animation: `wave-bar 1.1s ease-in-out ${delay}s infinite`,
                  transformOrigin: "center",
                }}
              />
            );
          })}
        </div>

        <div className="relative mt-2 text-center">
          <h2 className="font-display text-[1.4rem] font-semibold tracking-tight sm:text-[1.65rem]">
            Creating your flashcards…
          </h2>
          <p className="font-deva mt-1.5 text-[14px] text-ochre">
            आपके फ़्लैशकार्ड तैयार हो रहे हैं — कृपया प्रतीक्षा करें
          </p>
          <p
            key={stage}
            className="font-deva mx-auto mt-4 max-w-sm animate-rise text-[13px] text-white/55"
          >
            {LOAD_STAGES[stage]}
          </p>
        </div>
      </div>

      {/* skeleton — card count known, content not */}
      <div className="grid gap-3 px-6 py-7 sm:grid-cols-2 sm:px-8">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-36 rounded-2xl border border-ink/[0.07] bg-gradient-to-br from-ink/[0.03] to-ink/[0.06] bg-[length:200%_100%] p-4"
            style={{ animation: `shimmer-x 1.7s ease-in-out ${i * 0.16}s infinite` }}
          >
            <span className="block h-2.5 w-14 rounded-full bg-ink/10" />
            <span className="mt-4 block h-4 w-3/4 rounded-full bg-ink/[0.09]" />
            <span className="mt-2 block h-3 w-1/2 rounded-full bg-ink/[0.06]" />
          </div>
        ))}
        <p className="flex items-center justify-center gap-2 pt-1 text-[12px] text-ink/40 sm:col-span-2">
          <IconSparkle className="h-3.5 w-3.5 text-clay" />
          इसमें कुछ सेकंड लग सकते हैं
        </p>
      </div>
    </div>
  );
}

/* ── error ───────────────────────────────────────────────────────────────── */

export function FlashcardErrorState({
  message,
  onRetry,
  kind = "unknown",
}: {
  message: string;
  onRetry: () => void;
  kind?: string;
}) {
  const hint =
    kind === "network"
      ? "The FastAPI server could not be reached. Please make sure it is running."
      : kind === "timeout"
        ? "The server took too long. Please try again in a moment."
        : kind === "invalid-request"
          ? "Please check the class, subject and topic, then try again."
          : null;

  return (
    <Reveal delay={60}>
      <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-clay" />
        <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-clay/20 bg-clay/[0.08]">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-clay"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4.5" />
              <circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <h2 className="mt-6 font-display text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.6rem]">
            We couldn't create your flashcards
          </h2>
          <p className="font-deva mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/65">
            {message}
          </p>
          <p className="font-deva mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink/45">
            क्षमा करें, इस समय फ़्लैशकार्ड तैयार नहीं हो पाए। कृपया पुनः प्रयास करें।
          </p>

          {hint && (
            <p className="mx-auto mt-3 max-w-md rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/50">
              {hint}
            </p>
          )}

          <button
            type="button"
            onClick={onRetry}
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-18px_rgba(18,14,12,0.9)]"
          >
            <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
            Try Again
            <span className="font-deva text-[13px] font-semibold text-ochre">पुनः प्रयास</span>
          </button>

          <p className="mt-5 text-[12px] text-ink/35">
            आपकी कक्षा और विषय याद रखे गए हैं — दोबारा भरने की आवश्यकता नहीं है।
          </p>

          <details className="mx-auto mt-7 max-w-sm text-left">
            <summary className="cursor-pointer list-none text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/30 hover:text-ink/50">
              Developer · connection
            </summary>
            <p className="mt-2.5 rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[11.5px] leading-relaxed text-ink/45">
              POST{" "}
              <code className="rounded bg-ink/[0.06] px-1 py-0.5 text-[11px]">
                {getApiBaseUrl()}
                {FLASHCARD_GENERATE_PATH}
              </code>
              <br />
              Set <code className="text-[11px]">VITE_API_BASE_URL</code> to point at the
              FastAPI service. The request body is built from the live{" "}
              <code className="text-[11px]">/openapi.json</code> schema.
              <br />
              If this page is served from another origin, FastAPI must allow it via{" "}
              <code className="text-[11px]">CORSMiddleware</code>.
            </p>
          </details>
        </div>
      </div>
    </Reveal>
  );
}

```

---

## FILE: `src/components/lesson/LessonForm.tsx`

```tsx
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand } from "@/components/ui/Culture";
import { IconArrowRight, IconCheck, IconSparkle } from "@/components/ui/Icons";
import { CLASSES, SUBJECTS, type ClassLevel, type SubjectId } from "@/lib/store";
import { topicIdeas, SUBJECT_HINDI } from "@/lib/lesson";
import { cn } from "@/utils/cn";

function Field({
  label,
  hindi,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  hindi: string;
  hint?: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <label
          htmlFor={htmlFor}
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45"
        >
          {label}
        </label>
        <span className="font-deva text-[12px] text-ink/45">{hindi}</span>
      </div>
      <div className="mt-2">{children}</div>
      {hint && <p className="mt-1.5 text-[11.5px] text-ink/40">{hint}</p>}
    </div>
  );
}

const selectBase =
  "w-full appearance-none rounded-2xl border border-ink/12 bg-white px-4 py-3.5 pr-11 text-[14.5px] font-semibold text-ink outline-none transition-all duration-300 focus:border-clay/50 focus:ring-4 focus:ring-clay/10 hover:border-ink/20";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function LessonForm({
  classLevel,
  onClassChange,
  subject,
  onSubjectChange,
  topic,
  onTopicChange,
  onSubmit,
  loading,
  hasResult,
}: {
  classLevel: ClassLevel;
  onClassChange: (c: ClassLevel) => void;
  subject: SubjectId;
  onSubjectChange: (s: SubjectId) => void;
  topic: string;
  onTopicChange: (t: string) => void;
  onSubmit: () => void;
  loading: boolean;
  hasResult: boolean;
}) {
  const ideas = topicIdeas(subject, classLevel);
  const canSubmit = !loading && topic.trim().length > 0;

  return (
    <Reveal from="left" className="lg:sticky lg:top-24 lg:self-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSubmit) onSubmit();
        }}
        className="overflow-hidden rounded-[26px] glass-light shadow-lift"
      >
        <div className="h-1 w-full bg-gradient-to-r from-mid via-ochre to-clay" />

        <div className="space-y-6 p-5 sm:p-6">
          {/* FLN context badge */}
          <div className="rounded-2xl border border-leaf/20 bg-leaf/[0.06] px-3.5 py-3">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-leaf">
              <IconCheck className="h-3.5 w-3.5" />
              Primary FLN Classroom
            </p>
            <p className="font-deva mt-1 text-[12.5px] leading-snug text-ink/55">
              कक्षा 1–5 की बुनियादी साक्षरता और संख्या-ज्ञान के लिए डिज़ाइन किया गया।
            </p>
          </div>

          <Field label="Select Class" hindi="कक्षा चुनें" htmlFor="lg-class">
            <div className="relative">
              <select
                id="lg-class"
                value={classLevel}
                onChange={(e) => onClassChange(Number(e.target.value) as ClassLevel)}
                className={selectBase}
              >
                {CLASSES.map((c) => (
                  <option key={c} value={c}>
                    Class {c}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
          </Field>

          <Field label="Select Subject" hindi="विषय चुनें" htmlFor="lg-subject">
            <div className="relative">
              <select
                id="lg-subject"
                value={subject}
                onChange={(e) => onSubjectChange(e.target.value as SubjectId)}
                className={selectBase}
              >
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
            <p className="font-deva mt-1.5 text-[11.5px] text-ink/40">
              {SUBJECT_HINDI[subject]} · कक्षा {classLevel}
            </p>
          </Field>

          <Field
            label="Lesson Topic"
            hindi="विषय-वस्तु"
            htmlFor="lg-topic"
            hint="आप हिन्दी या अंग्रेज़ी में लिख सकते हैं।"
          >
            <input
              id="lg-topic"
              type="text"
              value={topic}
              onChange={(e) => onTopicChange(e.target.value)}
              placeholder="Enter a lesson topic..."
              autoComplete="off"
              className="font-deva w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:font-sans placeholder:text-[14px] placeholder:text-ink/35 focus:border-clay/50 focus:ring-4 focus:ring-clay/10"
            />
          </Field>

          {/* suggestions — UI hints only, never generated content */}
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/35">
              Suggestions
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {ideas.map((idea) => (
                <button
                  key={idea}
                  type="button"
                  onClick={() => onTopicChange(idea)}
                  className={cn(
                    "font-deva rounded-full border px-3 py-1.5 text-[12.5px] transition-all duration-300",
                    topic === idea
                      ? "-translate-y-0.5 border-transparent bg-ink text-white"
                      : "border-ink/12 bg-white/70 text-ink/65 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                  )}
                >
                  {idea}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            aria-busy={loading}
            className={cn(
              "group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-5 py-4 text-[15px] font-bold transition-all duration-300",
              loading
                ? "cursor-wait bg-ink/85 text-white"
                : canSubmit
                  ? "bg-ink text-white hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-18px_rgba(18,14,12,0.9)]"
                  : "cursor-not-allowed bg-ink/25 text-white/70",
            )}
          >
            {canSubmit && !loading && (
              <span className="absolute inset-y-0 -left-full w-1/3 bg-white/25 blur-md transition-transform duration-700 group-hover:animate-shine" />
            )}
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-ochre" />
                <span className="font-deva">तैयार कर रहे हैं…</span>
              </>
            ) : (
              <>
                <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
                Generate Lesson
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="font-deva text-center text-[11.5px] leading-snug text-ink/40">
            {hasResult
              ? "नया पाठ बनाने पर मौजूदा पाठ बदल जाएगा।"
              : "पाठ हिन्दी माध्यम में तैयार होगा।"}
          </p>
        </div>

        <div className="relative border-t border-ink/[0.07] bg-white/50 px-5 py-3.5 sm:px-6">
          <SohraiBand color="#C1502E" opacity={0.18} className="absolute inset-x-5 top-0 h-4" />
          <p className="mt-2 text-[11.5px] leading-snug text-ink/45">
            For teachers · शिक्षकों के लिए — आपको तकनीकी जानकारी भरने की आवश्यकता नहीं है।
          </p>
        </div>
      </form>
    </Reveal>
  );
}

```

---

## FILE: `src/components/lesson/LessonLoader.tsx`

```tsx
import { useEffect, useState } from "react";
import { BridgeMark, SohraiBand } from "@/components/ui/Culture";
import { IconSparkle } from "@/components/ui/Icons";

const STAGES = [
  "आपकी कक्षा और विषय समझ रहे हैं…",
  "सीखने का उद्देश्य तैयार कर रहे हैं…",
  "सरल व्याख्या लिख रहे हैं…",
  "कक्षा गतिविधि और अभ्यास प्रश्न जोड़ रहे हैं…",
  "पाठ को अंतिम रूप दे रहे हैं…",
];

function OrbitRing({
  size,
  duration,
  reverse,
  dotClass,
  dotSize,
}: {
  size: number;
  duration: number;
  reverse?: boolean;
  dotClass: string;
  dotSize: number;
}) {
  return (
    <span
      className="absolute left-1/2 top-1/2 will-change-transform"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        animation: `${reverse ? "spin-rev" : "spin"} ${duration}s linear infinite`,
      }}
    >
      <span
        className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${dotClass}`}
        style={{ width: dotSize, height: dotSize }}
      />
    </span>
  );
}

export function LessonLoader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStage((s) => (s < STAGES.length - 1 ? s + 1 : s));
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      {/* stage */}
      <div className="relative overflow-hidden bg-ink px-6 py-10 text-white sm:px-8">
        <SohraiBand color="#DFA03C" opacity={0.16} className="absolute inset-x-0 top-0 h-6" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-clay/30 blur-[80px]" />

        <div className="relative mx-auto grid h-40 w-40 place-items-center">
          {/* dashed cultural ring */}
          <span
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ochre/30"
            style={{ animation: "spin 40s linear infinite" }}
          />
          <OrbitRing size={128} duration={2.6} dotClass="bg-ochre shadow-[0_0_14px_3px_rgba(223,160,60,0.55)]" dotSize={9} />
          <OrbitRing size={96} duration={1.8} reverse dotClass="bg-clay" dotSize={7} />
          <OrbitRing size={150} duration={3.4} dotClass="bg-paper/70" dotSize={5} />

          <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-ochre to-clay shadow-[0_18px_36px_-16px_rgba(223,160,60,0.9)]">
            <BridgeMark className="h-11 w-11 rounded-xl" />
          </span>
        </div>

        <div className="relative mt-6 text-center">
          <h2 className="font-display text-[1.4rem] font-semibold tracking-tight sm:text-[1.65rem]">
            Generating your lesson…
          </h2>
          <p className="font-deva mt-1.5 text-[14px] text-ochre">
            आपका पाठ तैयार हो रहा है — कृपया प्रतीक्षा करें
          </p>
          <p
            key={stage}
            className="font-deva mx-auto mt-4 max-w-sm animate-rise text-[13px] text-white/55"
          >
            {STAGES[stage]}
          </p>
        </div>
      </div>

      {/* structure skeleton — section names are known, content is not */}
      <div className="space-y-5 px-6 py-7 sm:px-8">
        {[
          { hi: "सीखने का उद्देश्य", lines: [92, 78] },
          { hi: "सरल व्याख्या", lines: [96, 88, 70] },
          { hi: "कक्षा गतिविधि", lines: [86, 64] },
          { hi: "अभ्यास प्रश्न", lines: [90, 82] },
          { hi: "लघु मूल्यांकन", lines: [74] },
        ].map((block) => (
          <div key={block.hi} className="flex gap-3.5">
            <span className="mt-1 h-7 w-7 shrink-0 animate-pulse rounded-xl bg-ink/[0.07]" />
            <div className="flex-1 space-y-2">
              <span className="font-deva block text-[13px] font-semibold text-ink/35">
                {block.hi}
              </span>
              {block.lines.map((w, i) => (
                <span
                  key={i}
                  className="block h-3 rounded-full bg-gradient-to-r from-ink/[0.08] via-ink/[0.12] to-ink/[0.08] bg-[length:200%_100%]"
                  style={{
                    width: `${w}%`,
                    animation: `shimmer-x 1.6s ease-in-out ${i * 0.16}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        <p className="flex items-center justify-center gap-2 border-t border-ink/[0.07] pt-5 text-[12px] text-ink/40">
          <IconSparkle className="h-3.5 w-3.5 text-clay" />
          इसमें कुछ सेकंड लग सकते हैं
        </p>
      </div>
    </div>
  );
}

```

---

## FILE: `src/components/lesson/LessonResult.tsx`

```tsx
import type { ReactNode } from "react";
import type { LessonContent } from "@/services/api";
import { lessonToPlainText } from "@/lib/lesson";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile } from "@/components/ui/Culture";
import {
  IconBook,
  IconCheck,
  IconCopy,
  IconDownload,
  IconSparkle,
  IconSwap,
} from "@/components/ui/Icons";
import { useTeaching } from "@/lib/store";
import { useState } from "react";
import { cn } from "@/utils/cn";

function SectionCard({
  index,
  label,
  hindi,
  tone,
  icon,
  children,
  delay,
}: {
  index: number;
  label: string;
  hindi: string;
  tone: "ochre" | "clay" | "leaf" | "mid";
  icon: ReactNode;
  children: ReactNode;
  delay: number;
}) {
  const tones = {
    ochre: "from-ochre/20 to-ochre/5 text-clay-2",
    clay: "from-clay/18 to-clay/5 text-clay-2",
    leaf: "from-leaf/18 to-leaf/5 text-leaf",
    mid: "from-mid/16 to-mid/5 text-mid",
  } as const;

  return (
    <Reveal delay={delay}>
      <section className="group/section relative">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover/section:scale-105",
              tones[tone],
            )}
          >
            {icon}
          </span>
          <div className="min-w-0">
            <h2 className="font-deva text-[16.5px] font-semibold leading-snug text-ink sm:text-[17.5px]">
              {hindi}
            </h2>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/35">
              {String(index).padStart(2, "0")} · {label}
            </p>
          </div>
        </div>
        <div className="mt-3.5 pl-0 sm:pl-12">{children}</div>
      </section>
    </Reveal>
  );
}

function Bullets({ items, marker = "ochre" }: { items: string[]; marker?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: marker === "leaf" ? "var(--color-leaf)" : "var(--color-clay)" }}
          />
          <p className="font-deva text-[15.5px] leading-[1.85] text-ink/80 sm:text-[16.5px]">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Prose({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((para, i) => (
        <p
          key={i}
          className="font-deva text-[15.5px] leading-[1.95] text-ink/80 sm:text-[16.5px]"
        >
          {para}
        </p>
      ))}
    </div>
  );
}

function Numbered({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-ink/[0.06] text-[11px] font-bold text-ink/55">
            {i + 1}
          </span>
          <p className="font-deva text-[15.5px] leading-[1.85] text-ink/80 sm:text-[16.5px]">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function LessonResult({ lesson }: { lesson: LessonContent }) {
  const { openTranslationStudio } = useTeaching();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lessonToPlainText(lesson));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const download = () => {
    const blob = new Blob([lessonToPlainText(lesson)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bhasha-setu-class-${lesson.classLevel}-${lesson.subject}-lesson.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <article className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      {/* header */}
      <header className="relative overflow-hidden bg-ink px-6 py-6 text-white sm:px-8">
        <SohraiTile
          id="result-head"
          color="#F3E7D2"
          opacity={0.08}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-clay/30 blur-[70px]" />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ochre">
              <IconSparkle className="h-3.5 w-3.5" />
              AI-generated Hindi lesson
            </p>
            <h1 className="font-deva mt-2 text-[1.5rem] font-semibold leading-snug sm:text-[1.85rem]">
              {lesson.topic}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                कक्षा {lesson.classLevel} · Class {lesson.classLevel}
              </span>
              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                {lesson.subject === "mathematics"
                  ? "गणित · Mathematics"
                  : lesson.subject === "language"
                    ? "भाषा · Language"
                    : "पर्यावरण अध्ययन · EVS"}
              </span>
              <span className="rounded-lg border border-ochre/35 bg-ochre/12 px-2.5 py-1 text-[11.5px] font-semibold text-ochre">
                Primary FLN
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 print:hidden">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              {copied ? (
                <IconCheck className="h-4 w-4 text-leaf" />
              ) : (
                <IconCopy className="h-4 w-4 text-ochre" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              onClick={download}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              <IconDownload className="h-4 w-4 text-ochre" />
              Download
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              <IconBook className="h-4 w-4 text-ochre" />
              Print
            </button>
          </div>
        </div>
      </header>

      {/* body — readability first */}
      <div className="divide-y divide-ink/[0.07] px-6 py-7 sm:px-8 sm:py-8">
        {lesson.learningObjective.length > 0 && (
          <SectionCard
            index={1}
            label="Learning Objective"
            hindi="सीखने का उद्देश्य"
            tone="ochre"
            delay={40}
            icon={<IconBook className="h-4.5 w-4.5" />}
          >
            <Bullets items={lesson.learningObjective} />
          </SectionCard>
        )}

        {lesson.simpleExplanation.length > 0 && (
          <SectionCard
            index={2}
            label="Simple Explanation"
            hindi="सरल व्याख्या"
            tone="mid"
            delay={90}
            icon={
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5.5h9v13H6a2 2 0 0 1-2-2V5.5Z" />
                <path d="M13 5.5h7v11a2 2 0 0 1-2 2h-5v-13Z" />
                <path d="M6.5 9.5H10M6.5 12.5H10M15 9.5h2.5M15 12.5h2.5" />
              </svg>
            }
          >
            <Prose items={lesson.simpleExplanation} />
          </SectionCard>
        )}

        {lesson.classroomActivity.length > 0 && (
          <SectionCard
            index={3}
            label="Classroom Activity"
            hindi="कक्षा गतिविधि"
            tone="clay"
            delay={140}
            icon={
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="10" r="2.4" />
                <path d="M3.5 19c.6-3 2.9-4.6 5.5-4.6S13.9 16 14.5 19" />
                <path d="M14.8 16.4c1.9-.4 3.9.4 4.7 2.6" />
              </svg>
            }
          >
            {lesson.classroomActivity.length > 1 ? (
              <Numbered items={lesson.classroomActivity} />
            ) : (
              <Prose items={lesson.classroomActivity} />
            )}
          </SectionCard>
        )}

        {lesson.practiceQuestions.length > 0 && (
          <SectionCard
            index={4}
            label="Practice Questions"
            hindi="अभ्यास प्रश्न"
            tone="leaf"
            delay={190}
            icon={
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 5.5h15v11h-8l-4 3.5v-3.5h-3v-11Z" />
                <path d="M8.5 9.5h7M8.5 12.5h4.5" />
              </svg>
            }
          >
            <Numbered items={lesson.practiceQuestions} />
          </SectionCard>
        )}

        {lesson.shortAssessment.length > 0 && (
          <SectionCard
            index={5}
            label="Short Assessment"
            hindi="लघु मूल्यांकन"
            tone="ochre"
            delay={240}
            icon={<IconCheck className="h-4.5 w-4.5" />}
          >
            <ul className="space-y-2">
              {lesson.shortAssessment.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-leaf/35 bg-leaf/8">
                    <IconCheck className="h-3 w-3 text-leaf" />
                  </span>
                  <p className="font-deva text-[15.5px] leading-[1.85] text-ink/80 sm:text-[16.5px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </SectionCard>
        )}
      </div>

      {/* footer */}
      <div className="flex flex-wrap items-center gap-3 border-t border-ink/[0.07] bg-paper px-6 py-4 sm:px-8 print:hidden">
        <p className="font-deva text-[12px] leading-snug text-ink/50">
          कक्षा में पढ़ाने से पहले इसे अपने अनुभव के अनुसार बदल लें।
        </p>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={() => openTranslationStudio(lessonToPlainText(lesson))}
            className="inline-flex items-center gap-2 rounded-xl border border-ink/12 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40"
          >
            <IconSwap className="h-4 w-4 text-clay" />
            <span className="font-olchiki text-[13px]">ᱥᱟᱱᱛᱟᱲᱤ</span> में अनुवाद
          </button>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-3.5 py-2 text-[12.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            {copied ? <IconCheck className="h-4 w-4 text-leaf" /> : <IconCopy className="h-4 w-4 text-ochre" />}
            {copied ? "Copied" : "Copy lesson"}
          </button>
        </div>
      </div>
    </article>
  );
}

```

---

## FILE: `src/components/lesson/LessonStates.tsx`

```tsx
import collage from "@/assets/jharkhand-collage.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand, SohraiTile } from "@/components/ui/Culture";
import {
  IconBook,
  IconCheck,
  IconSparkle,
} from "@/components/ui/Icons";
import { LESSON_SECTIONS } from "@/lib/lesson";
import { getApiBaseUrl, LESSON_GENERATE_PATH } from "@/services/api";

/** Shown before any generation. Contains no lesson content whatsoever. */
export function LessonEmptyState() {
  return (
    <Reveal delay={80}>
      <div className="relative overflow-hidden rounded-[26px] border border-dashed border-ink/15 bg-white/70 shadow-lift">
        {/* subtle cultural strip only — the space stays empty */}
        <SohraiBand color="#C1502E" opacity={0.22} className="h-7 w-full" />

        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage: `url(${collage})`,
              backgroundSize: "cover",
              backgroundPosition: "60% 45%",
              maskImage:
                "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)",
            }}
          />
          <SohraiTile
            id="empty-tile"
            color="#8C2F1B"
            opacity={0.05}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />

          <div className="relative mx-auto grid h-24 w-24 place-items-center">
            <span className="absolute inset-0 rounded-full border border-dashed border-clay/30" />
            <span
              className="absolute inset-0 rounded-full border border-clay/15"
              style={{ animation: "spin 34s linear infinite" }}
            />
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-ochre to-clay text-white shadow-[0_22px_44px_-20px_rgba(193,80,46,0.75)]">
              <IconBook className="h-8 w-8" />
            </span>
          </div>

          <h2 className="relative mt-7 font-display text-[1.55rem] font-semibold tracking-tight text-ink sm:text-[1.9rem]">
            Your lesson will appear here
          </h2>
          <p className="font-deva relative mx-auto mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">
            बाईं ओर कक्षा, विषय और विषय-वस्तु चुनकर «Generate Lesson» दबाएँ। आपके लिए एक
            संरचित हिन्दी पाठ तैयार होगा — जिसे आप कक्षा में सीधे पढ़ा सकती हैं।
          </p>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-2 text-left sm:grid-cols-1">
            {LESSON_SECTIONS.map((section, i) => (
              <div
                key={section.key}
                className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white/85 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/30"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ink/[0.05] text-[11px] font-bold text-ink/45">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-ink/80">{section.label}</p>
                  <p className="font-deva truncate text-[12px] text-ink/45">
                    {section.hindi}
                  </p>
                </div>
                <IconCheck className="ml-auto h-4 w-4 shrink-0 text-leaf/70" />
              </div>
            ))}
          </div>

          <p className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[12px] font-medium text-ink/50">
            <IconSparkle className="h-3.5 w-3.5 text-clay" />
            Designed for primary FLN classrooms · प्राथमिक FLN कक्षा के लिए
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/** Friendly failure. No stack traces, no status codes, no technical text. */
export function LessonErrorState({
  message,
  onRetry,
  kind = "unknown",
}: {
  message: string;
  onRetry: () => void;
  kind?: string;
}) {
  const hint =
    kind === "network"
      ? "The FastAPI server could not be reached. Please make sure it is running."
      : kind === "timeout"
        ? "The server took too long. Please try again in a moment."
        : kind === "invalid-request"
          ? "Please check the class, subject and topic, then try again."
          : null;

  return (
    <Reveal delay={60}>
      <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-clay" />
        <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-clay/20 bg-clay/[0.08]">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-clay"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4.5" />
              <circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <h2 className="mt-6 font-display text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.6rem]">
            We couldn't generate your lesson
          </h2>
          <p className="font-deva mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/65">
            {message}
          </p>
          <p className="font-deva mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink/45">
            क्षमा करें, इस समय पाठ तैयार नहीं हो पाया। कृपया पुनः प्रयास करें।
          </p>

          {hint && (
            <p className="mx-auto mt-3 max-w-md rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/50">
              {hint}
            </p>
          )}

          <button
            type="button"
            onClick={onRetry}
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-18px_rgba(18,14,12,0.9)]"
          >
            <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
            Try Again
            <span className="font-deva text-[13px] font-semibold text-ochre">
              पुनः प्रयास
            </span>
          </button>

          <p className="mt-5 text-[12px] text-ink/35">
            आपकी कक्षा और विषय याद रखे गए हैं — दोबारा भरने की आवश्यकता नहीं है।
          </p>

          <details className="mx-auto mt-7 max-w-sm text-left">
            <summary className="cursor-pointer list-none text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/30 hover:text-ink/50">
              Developer · connection
            </summary>
            <p className="mt-2.5 rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[11.5px] leading-relaxed text-ink/45">
              POST{" "}
              <code className="rounded bg-ink/[0.06] px-1 py-0.5 text-[11px]">
                {getApiBaseUrl()}
                {LESSON_GENERATE_PATH}
              </code>
              <br />
              Set <code className="text-[11px]">VITE_API_BASE_URL</code> to point at the
              FastAPI service. The request body is built from the live{" "}
              <code className="text-[11px]">/openapi.json</code> schema.
              <br />
              If this page is served from another origin, FastAPI must allow it via{" "}
              <code className="text-[11px]">CORSMiddleware</code> — otherwise the browser
              blocks the request and it looks like a network error.
            </p>
          </details>
        </div>
      </div>
    </Reveal>
  );
}

```

---

## FILE: `src/components/ui/Culture.tsx`

```tsx
import type { SVGProps } from "react";

/** Brand mark: a bridge ("setu") between two scripts. */
export function BridgeMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...props}>
      <defs>
        <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9B768" />
          <stop offset="55%" stopColor="#D7714A" />
          <stop offset="100%" stopColor="#8C2F1B" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#bm-g)" />
      <g
        stroke="#1b1210"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.92"
      >
        <path d="M11 31c5.5-9 20.5-9 26 0" />
        <path d="M24 20.5V37" />
        <path d="M11 37h26" />
        <path d="M17.5 25.5v-6M30.5 25.5v-6" />
        <circle cx="17.5" cy="16" r="1.6" fill="#1b1210" stroke="none" />
        <circle cx="30.5" cy="16" r="1.6" fill="#1b1210" stroke="none" />
      </g>
    </svg>
  );
}

/**
 * Sohrai / Paitkar inspired decorative band — triangles, dotted lines and
 * hatch strokes. Used sparingly, at low opacity.
 */
export function SohraiBand({
  className,
  color = "#C1502E",
  opacity = 0.5,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 320 44"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" stroke={color} strokeWidth="1.6">
        <path d="M0 34h320" />
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={`tri-${i}`}
            d={`M${i * 20} 34 L${i * 20 + 10} 16 L${i * 20 + 20} 34`}
          />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={`hatch-${i}`}
            d={`M${i * 20 + 3} 31 L${i * 20 + 10} 21 L${i * 20 + 17} 31`}
            strokeWidth="1"
            opacity="0.55"
          />
        ))}
      </g>
      <g fill={color}>
        {Array.from({ length: 32 }).map((_, i) => (
          <circle key={`dot-${i}`} cx={i * 10 + 5} cy={9} r={i % 2 ? 1.7 : 2.6} />
        ))}
      </g>
    </svg>
  );
}

/** Repeating tile version for large surface fills. */
export function SohraiTile({
  className,
  id,
  color = "#FFFFFF",
  opacity = 0.12,
}: {
  className?: string;
  id: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg className={className} aria-hidden="true" style={{ opacity }}>
      <defs>
        <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round">
            <path d="M0 64h72" />
            <path d="M4 64 18 40l14 24" />
            <path d="M40 64 54 40l14 24" />
            <path d="M8 26c6-8 12-8 18 0" />
            <path d="M44 26c6-8 12-8 18 0" />
            <path d="M36 0v14" />
          </g>
          <g fill={color}>
            <circle cx="18" cy="18" r="2.4" />
            <circle cx="54" cy="18" r="2.4" />
            <circle cx="36" cy="22" r="1.6" />
            <circle cx="18" cy="34" r="1.3" />
            <circle cx="54" cy="34" r="1.3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Radiating sun motif (common in Santhal wall art). */
export function SunMotif({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="60" cy="60" r="17" />
        <circle cx="60" cy="60" r="9" opacity="0.6" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI) / 12;
          const r1 = 23;
          const r2 = i % 2 ? 34 : 42;
          return (
            <line
              key={i}
              x1={60 + Math.cos(a) * r1}
              y1={60 + Math.sin(a) * r1}
              x2={60 + Math.cos(a) * r2}
              y2={60 + Math.sin(a) * r2}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Line of Santhal dancers (silhouette strip, stylised). */
export function DancersStrip({ className, color = "#fff" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 240 40" className={className} aria-hidden="true">
      <g fill={color}>
        {Array.from({ length: 6 }).map((_, i) => {
          const x = i * 40;
          return (
            <g key={i} opacity={0.85}>
              <circle cx={x + 12} cy={9} r="4.4" />
              <path d={`M${x + 4} 36 L${x + 12} 14 L${x + 20} 36 Z`} />
              <path
                d={`M${x + 12} 20 L${x - 2} 12 M${x + 12} 20 L${x + 26} 12`}
                stroke={color}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

```

---

## FILE: `src/components/ui/Icons.tsx`

```tsx
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBook(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5S10.5 4.5 6.5 4.5H3v13h4c2.5 0 5 1 5 1s2.5-1 5-1h4v-13h-3.5c-4 0-5.5 2-5.5 2Z" />
      <path d="M12 6.5v13" />
      <path d="M6.5 8.5h2.5M6.5 11.5h2.5" />
    </svg>
  );
}

export function IconLanguages(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5.5h9M7.5 4v1.5" />
      <path d="M5.2 5.5c0 3.2-1.2 6-2.7 7.6M9.8 5.5c0 4 1.6 6.6 3.6 8" />
      <path d="M4 9.4h6.4" />
      <path d="m13.5 20 3.6-9 3.6 9" />
      <path d="M15 17h4.2" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l1.6 4.4 4.4 1.6-4.4 1.6L12 15.5l-1.6-4.4L6 9.5l4.4-1.6L12 3.5Z" />
      <path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h14" />
      <path d="m13 6.5 5.5 5.5L13 17.5" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v10" />
      <path d="m8 10.5 4 4 4-4" />
      <path d="M4.5 19h15" />
    </svg>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19.5 12h-14" />
      <path d="M11 6.5 5.5 12 11 17.5" />
    </svg>
  );
}

export function IconSwap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.5h13" />
      <path d="m14 5 3.5 3.5L14 12" />
      <path d="M20 15.5H7" />
      <path d="m10 12-3.5 3.5L10 19" />
    </svg>
  );
}

export function IconGrid(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-6.2 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.8 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function IconFlashcards(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="6" width="13" height="15" rx="2.4" />
      <path d="M10 11h7M10 14.5h5" />
      <path d="M17 4.5H6A2.5 2.5 0 0 0 3.5 7v9A2.5 2.5 0 0 0 5.5 18" opacity="0.55" />
    </svg>
  );
}

export function IconWorksheet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M8 8h8M8 12h8M8 16h4.5" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.5 8 4.2-8 4.3-8-4.3 8-4.2Z" />
      <path d="m4 12.4 8 4.3 8-4.3" />
      <path d="m4 16.4 8 4.3 8-4.3" />
    </svg>
  );
}

```

---

## FILE: `src/components/ui/Reveal.tsx`

```tsx
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  from?: "up" | "left" | "right" | "scale";
};

const FROM: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate3d(0, 34px, 0)",
  left: "translate3d(-40px, 0, 0)",
  right: "translate3d(40px, 0, 0)",
  scale: "translate3d(0, 24px, 0) scale(0.96)",
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  from = "up",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);

  return (
    <Tag
      ref={ref}
      className={cn("will-change-[opacity,transform]", className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0,0,0)" : FROM[from],
        transition:
          "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

/** Word-by-word headline reveal */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  step = 90,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  step?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.2);
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn("inline-block overflow-hidden align-bottom", wordClassName)}
        >
          <span
            className="inline-block will-change-transform"
            style={{
              transform: inView ? "translateY(0)" : "translateY(110%)",
              opacity: inView ? 1 : 0,
              transition:
                "transform .95s cubic-bezier(.16,1,.3,1), opacity .7s ease-out",
              transitionDelay: `${delay + i * step}ms`,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}

```

---

## FILE: `src/components/ui/useTilt.ts`

```typescript
import { useCallback, useRef } from "react";

/**
 * 3D tilt driven by CSS variables on the node itself (no React re-renders
 * per mouse move, so it stays smooth).
 */
export function useTilt(max = 7) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      node.classList.add("tilt-live");
      node.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
      node.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
      node.style.setProperty("--mx", `${px * 100}%`);
      node.style.setProperty("--my", `${py * 100}%`);
    },
    [max],
  );

  const onLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.remove("tilt-live");
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ty", "0px");
  }, []);

  return { ref, onMove, onLeave };
}

```

---

## FILE: `src/components/worksheet/WorksheetForm.tsx`

```tsx
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand } from "@/components/ui/Culture";
import { IconArrowRight, IconCheck, IconSparkle } from "@/components/ui/Icons";
import { CLASSES, SUBJECTS, type ClassLevel, type SubjectId } from "@/lib/store";
import { topicIdeas, SUBJECT_HINDI } from "@/lib/lesson";
import { cn } from "@/utils/cn";

const QUESTION_COUNTS = [5, 10, 15, 20] as const;

function Field({
  label,
  hindi,
  htmlFor,
  children,
}: {
  label: string;
  hindi: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <label
          htmlFor={htmlFor}
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45"
        >
          {label}
        </label>
        <span className="font-deva text-[12px] text-ink/45">{hindi}</span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

const selectBase =
  "w-full appearance-none rounded-2xl border border-ink/12 bg-white px-4 py-3.5 pr-11 text-[14.5px] font-semibold text-ink outline-none transition-all duration-300 focus:border-clay/50 focus:ring-4 focus:ring-clay/10 hover:border-ink/20";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function WorksheetForm({
  classLevel,
  onClassChange,
  subject,
  onSubjectChange,
  topic,
  onTopicChange,
  questionCount,
  onQuestionCountChange,
  onSubmit,
  loading,
  hasResult,
}: {
  classLevel: ClassLevel;
  onClassChange: (c: ClassLevel) => void;
  subject: SubjectId;
  onSubjectChange: (s: SubjectId) => void;
  topic: string;
  onTopicChange: (t: string) => void;
  questionCount: number;
  onQuestionCountChange: (n: number) => void;
  onSubmit: () => void;
  loading: boolean;
  hasResult: boolean;
}) {
  const ideas = topicIdeas(subject, classLevel);
  const canSubmit = !loading && topic.trim().length > 0;

  return (
    <Reveal from="left" className="lg:sticky lg:top-24 lg:self-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSubmit) onSubmit();
        }}
        className="overflow-hidden rounded-[26px] glass-light shadow-lift"
      >
        <div className="h-1 w-full bg-gradient-to-r from-leaf via-ochre to-clay" />

        <div className="space-y-6 p-5 sm:p-6">
          <div className="rounded-2xl border border-leaf/20 bg-leaf/[0.06] px-3.5 py-3">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-leaf">
              <IconCheck className="h-3.5 w-3.5" />
              Primary FLN Classroom
            </p>
            <p className="font-deva mt-1 text-[12.5px] leading-snug text-ink/55">
              कक्षा 1–5 के लिए प्रिंट-योग्य अभ्यास पत्रिका।
            </p>
          </div>

          <Field label="Select Class" hindi="कक्षा चुनें" htmlFor="ws-class">
            <div className="relative">
              <select
                id="ws-class"
                value={classLevel}
                onChange={(e) => onClassChange(Number(e.target.value) as ClassLevel)}
                className={selectBase}
              >
                {CLASSES.map((c) => (
                  <option key={c} value={c}>
                    Class {c}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
          </Field>

          <Field label="Select Subject" hindi="विषय चुनें" htmlFor="ws-subject">
            <div className="relative">
              <select
                id="ws-subject"
                value={subject}
                onChange={(e) => onSubjectChange(e.target.value as SubjectId)}
                className={selectBase}
              >
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
            <p className="font-deva mt-1.5 text-[11.5px] text-ink/40">
              {SUBJECT_HINDI[subject]} · कक्षा {classLevel}
            </p>
          </Field>

          <Field label="Worksheet Topic" hindi="विषय-वस्तु" htmlFor="ws-topic">
            <input
              id="ws-topic"
              type="text"
              value={topic}
              onChange={(e) => onTopicChange(e.target.value)}
              placeholder="Enter a worksheet topic..."
              autoComplete="off"
              className="font-deva w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:font-sans placeholder:text-[14px] placeholder:text-ink/35 focus:border-clay/50 focus:ring-4 focus:ring-clay/10"
            />
          </Field>

          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/35">
              Suggestions
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {ideas.map((idea) => (
                <button
                  key={idea}
                  type="button"
                  onClick={() => onTopicChange(idea)}
                  className={cn(
                    "font-deva rounded-full border px-3 py-1.5 text-[12.5px] transition-all duration-300",
                    topic === idea
                      ? "-translate-y-0.5 border-transparent bg-ink text-white"
                      : "border-ink/12 bg-white/70 text-ink/65 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                  )}
                >
                  {idea}
                </button>
              ))}
            </div>
          </div>

          <Field label="Questions" hindi="प्रश्नों की संख्या" htmlFor="ws-count">
            <div className="grid grid-cols-4 gap-2">
              {QUESTION_COUNTS.map((n) => {
                const active = n === questionCount;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => onQuestionCountChange(n)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-xl border py-2.5 text-[14px] font-bold transition-all duration-300",
                      active
                        ? "-translate-y-0.5 border-transparent bg-ink text-ochre shadow-md"
                        : "border-ink/12 bg-white/70 text-ink/65 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                    )}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
            <p className="mt-1.5 text-[11.5px] leading-snug text-ink/40">
              Requested count — the backend decides what it returns.
            </p>
          </Field>

          <button
            type="submit"
            disabled={!canSubmit}
            aria-busy={loading}
            className={cn(
              "group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-5 py-4 text-[15px] font-bold transition-all duration-300",
              loading
                ? "cursor-wait bg-ink/85 text-white"
                : canSubmit
                  ? "bg-ink text-white hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-18px_rgba(18,14,12,0.9)]"
                  : "cursor-not-allowed bg-ink/25 text-white/70",
            )}
          >
            {canSubmit && !loading && (
              <span className="absolute inset-y-0 -left-full w-1/3 bg-white/25 blur-md transition-transform duration-700 group-hover:animate-shine" />
            )}
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-ochre" />
                <span className="font-deva">तैयार कर रहे हैं…</span>
              </>
            ) : (
              <>
                <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
                Generate Worksheet
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="font-deva text-center text-[11.5px] leading-snug text-ink/40">
            {hasResult
              ? "नई पत्रिका बनाने पर मौजूदा पत्रिका बदल जाएगी।"
              : "पत्रिका हिन्दी माध्यम में तैयार होगी।"}
          </p>
        </div>

        <div className="relative border-t border-ink/[0.07] bg-white/50 px-5 py-3.5 sm:px-6">
          <SohraiBand color="#C1502E" opacity={0.18} className="absolute inset-x-5 top-0 h-4" />
          <p className="mt-2 text-[11.5px] leading-snug text-ink/45">
            For teachers · शिक्षकों के लिए — आपको तकनीकी जानकारी भरने की आवश्यकता नहीं है।
          </p>
        </div>
      </form>
    </Reveal>
  );
}

```

---

## FILE: `src/components/worksheet/WorksheetResult.tsx`

```tsx
import { useState } from "react";
import type { Worksheet, WorksheetQuestion } from "@/services/worksheet";
import { worksheetToPlainText } from "@/services/worksheet";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile } from "@/components/ui/Culture";
import {
  IconCheck,
  IconCopy,
  IconDownload,
  IconWorksheet,
} from "@/components/ui/Icons";

const TYPE_LABEL: Record<string, string> = {
  mcq: "बहुविकल्पीय",
  multiple_choice: "बहुविकल्पीय",
  "multiple choice": "बहुविकल्पीय",
  short_answer: "लघु उत्तर",
  "short answer": "लघु उत्तर",
  fill_in_the_blank: "रिक्त स्थान",
  "fill in the blank": "रिक्त स्थान",
  fill_blank: "रिक्त स्थान",
  true_false: "सही / ग़लत",
  "true/false": "सही / ग़लत",
  long_answer: "दीर्घ उत्तर",
  "long answer": "दीर्घ उत्तर",
  match: "मिलान करें",
  matching: "मिलान करें",
};

function typeLabel(type: string): string | null {
  if (!type) return null;
  return TYPE_LABEL[type.trim().toLowerCase()] ?? null;
}

/** Blank ruled lines — writing space only, never invented content. */
function AnswerSpace({ lines = 2 }: { lines?: number }) {
  return (
    <div className="mt-3 space-y-2" aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} className="block h-px w-full bg-ink/12" />
      ))}
    </div>
  );
}

function QuestionCard({ index, question }: { index: number; question: WorksheetQuestion }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const label = typeLabel(question.type);

  return (
    <li className="relative">
      <div className="flex items-start gap-3.5">
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ink text-[12px] font-bold text-ochre">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <p className="font-deva text-[16px] leading-[1.8] text-ink sm:text-[17px]">
              {question.text}
            </p>
            {label && (
              <span className="font-deva rounded-full border border-leaf/30 bg-leaf/[0.07] px-2 py-0.5 text-[10.5px] font-semibold text-leaf">
                {label}
              </span>
            )}
          </div>

          {/* options — only when the backend returned them */}
          {question.options.length > 0 && (
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {question.options.map((option, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-ink/20 bg-white text-[10px] font-bold text-ink/55">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-deva text-[14.5px] leading-relaxed text-ink/75">
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* student writing space when no MCQ options were provided */}
          {question.options.length === 0 && <AnswerSpace />}

          {/* teacher-only answer, only if the backend supplied one */}
          {question.answer && (
            <div className="mt-3 print:hidden">
              <button
                type="button"
                onClick={() => setShowAnswer((v) => !v)}
                aria-expanded={showAnswer}
                className="font-deva inline-flex items-center gap-1.5 rounded-lg border border-ink/12 bg-white px-2.5 py-1 text-[11.5px] font-semibold text-ink/60 transition-all duration-300 hover:border-clay/40 hover:text-ink"
              >
                <IconCheck className="h-3.5 w-3.5 text-leaf" />
                {showAnswer ? "उत्तर छिपाएँ" : "उत्तर देखें"}
              </button>
              {showAnswer && (
                <p className="font-deva mt-2 rounded-xl border border-leaf/20 bg-leaf/[0.05] px-3 py-2 text-[14px] leading-relaxed text-ink/75">
                  {question.answer}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export function WorksheetResult({ worksheet }: { worksheet: Worksheet }) {
  const [copied, setCopied] = useState(false);
  const [showKey, setShowKey] = useState(false);

  const flatQuestions = [
    ...worksheet.questions,
    ...worksheet.sections.flatMap((s) => s.questions),
  ];

  const keyFromQuestions = flatQuestions
    .map((q) => ({ question: q.text, answer: q.answer }))
    .filter((k) => k.answer);
  const answerKey = worksheet.answerKey.length ? worksheet.answerKey : keyFromQuestions;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(worksheetToPlainText(worksheet));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const download = () => {
    const blob = new Blob([worksheetToPlainText(worksheet)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bhasha-setu-class-${worksheet.classLevel}-worksheet.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <article className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      {/* header */}
      <header className="relative overflow-hidden bg-ink px-6 py-6 text-white sm:px-8">
        <SohraiTile
          id="ws-result-head"
          color="#F3E7D2"
          opacity={0.08}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-leaf/25 blur-[70px]" />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ochre">
              <IconWorksheet className="h-3.5 w-3.5" />
              AI-generated Hindi worksheet
            </p>
            <h1 className="font-deva mt-2 text-[1.5rem] font-semibold leading-snug sm:text-[1.85rem]">
              {worksheet.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                कक्षा {worksheet.classLevel} · Class {worksheet.classLevel}
              </span>
              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                {worksheet.subject === "Mathematics"
                  ? "गणित · Mathematics"
                  : worksheet.subject === "Language"
                    ? "भाषा · Language"
                    : "पर्यावरण अध्ययन · EVS"}
              </span>
              <span className="rounded-lg border border-ochre/35 bg-ochre/12 px-2.5 py-1 text-[11.5px] font-semibold text-ochre">
                {flatQuestions.length} प्रश्न
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 print:hidden">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              {copied ? (
                <IconCheck className="h-4 w-4 text-leaf" />
              ) : (
                <IconCopy className="h-4 w-4 text-ochre" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              onClick={download}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              <IconDownload className="h-4 w-4 text-ochre" />
              Download
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              <IconWorksheet className="h-4 w-4 text-ochre" />
              Print
            </button>
          </div>
        </div>
      </header>

      {/* instructions — only when returned */}
      {worksheet.instructions && (
        <div className="border-b border-ink/[0.07] bg-paper px-6 py-4 sm:px-8">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/40">
            Instructions / निर्देश
          </p>
          <p className="font-deva mt-1.5 text-[14.5px] leading-[1.85] text-ink/75">
            {worksheet.instructions}
          </p>
        </div>
      )}

      {/* questions */}
      <div className="px-6 py-7 sm:px-8 sm:py-8">
        {worksheet.questions.length > 0 && (
          <ol className="space-y-6">
            {worksheet.questions.map((q, i) => (
              <QuestionCard key={`q-${i}`} index={i + 1} question={q} />
            ))}
          </ol>
        )}

        {worksheet.sections.map((section, si) => {
          const offset =
            worksheet.questions.length +
            worksheet.sections.slice(0, si).reduce((n, s) => n + s.questions.length, 0);
          return (
            <section key={`s-${si}`} className="mt-8">
              {section.heading && (
                <h2 className="font-deva mb-4 flex items-center gap-3 text-[15px] font-semibold text-ink">
                  <span className="h-5 w-1 rounded-full bg-clay" />
                  {section.heading}
                </h2>
              )}
              <ol className="space-y-6">
                {section.questions.map((q, qi) => (
                  <QuestionCard
                    key={`s-${si}-q-${qi}`}
                    index={offset + qi + 1}
                    question={q}
                  />
                ))}
              </ol>
            </section>
          );
        })}
      </div>

      {/* answer key — only when the backend supplied answers */}
      {answerKey.length > 0 && (
        <div className="border-t border-ink/[0.07] bg-paper px-6 py-5 sm:px-8 print:hidden">
          <Reveal delay={80}>
            <button
              type="button"
              onClick={() => setShowKey((v) => !v)}
              aria-expanded={showKey}
              className="flex w-full items-center gap-3 text-left"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-ochre/25 to-clay/20">
                <IconCheck className="h-4 w-4 text-clay-2" />
              </span>
              <span className="flex-1">
                <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/40">
                  Answer Key · शिक्षक के लिए
                </span>
                <span className="font-deva block text-[13px] text-ink/60">
                  {answerKey.length} उत्तर उपलब्ध
                </span>
              </span>
              <span className="text-[12px] font-semibold text-clay">
                {showKey ? "छिपाएँ" : "देखें"}
              </span>
            </button>

            {showKey && (
              <ol className="mt-4 space-y-2">
                {answerKey.map((entry, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl border border-ink/[0.07] bg-white px-3.5 py-2.5"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-ink/[0.06] text-[10px] font-bold text-ink/50">
                      {i + 1}
                    </span>
                    <span className="min-w-0">
                      {entry.question && (
                        <span className="font-deva block truncate text-[12px] text-ink/45">
                          {entry.question}
                        </span>
                      )}
                      <span className="font-deva block text-[14px] leading-relaxed text-ink/80">
                        {entry.answer}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </Reveal>
        </div>
      )}

      {/* footer */}
      <div className="flex flex-wrap items-center gap-3 border-t border-ink/[0.07] bg-white px-6 py-4 sm:px-8 print:hidden">
        <p className="font-deva text-[12px] leading-snug text-ink/50">
          कक्षा में बाँटने से पहले इसे अपने अनुभव के अनुसार बदल लें।
        </p>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl border border-ink/12 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40"
          >
            <IconWorksheet className="h-4 w-4 text-clay" />
            Print worksheet
          </button>
        </div>
      </div>
    </article>
  );
}

```

---

## FILE: `src/components/worksheet/WorksheetStates.tsx`

```tsx
import collage from "@/assets/jharkhand-collage.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand, SohraiTile, BridgeMark } from "@/components/ui/Culture";
import { IconSparkle, IconWorksheet } from "@/components/ui/Icons";
import { getApiBaseUrl } from "@/services/schema";
import { WORKSHEET_GENERATE_PATH } from "@/services/worksheet";

const LOAD_STAGES = [
  "आपकी कक्षा और विषय समझ रहे हैं…",
  "प्रश्न तैयार कर रहे हैं…",
  "उत्तरमाला जोड़ रहे हैं…",
  "पत्रिका को अंतिम रूप दे रहे हैं…",
];

function OrbitRing({
  size,
  duration,
  reverse,
  dotClass,
  dotSize,
}: {
  size: number;
  duration: number;
  reverse?: boolean;
  dotClass: string;
  dotSize: number;
}) {
  return (
    <span
      className="absolute left-1/2 top-1/2 will-change-transform"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        animation: `${reverse ? "spin-rev" : "spin"} ${duration}s linear infinite`,
      }}
    >
      <span
        className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${dotClass}`}
        style={{ width: dotSize, height: dotSize }}
      />
    </span>
  );
}

/* ── empty ───────────────────────────────────────────────────────────────── */

export function WorksheetEmptyState() {
  const preview = [
    { hi: "प्रश्न १ — वस्तुनिष्ठ", w: "84%" },
    { hi: "प्रश्न २ — रिक्त स्थान", w: "66%" },
    { hi: "प्रश्न ३ — लघु उत्तर", w: "92%" },
    { hi: "प्रश्न ४ — चित्र पहचान", w: "72%" },
  ];

  return (
    <Reveal delay={80}>
      <div className="relative overflow-hidden rounded-[26px] border border-dashed border-ink/15 bg-white/70 shadow-lift">
        <SohraiBand color="#C1502E" opacity={0.22} className="h-7 w-full" />

        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage: `url(${collage})`,
              backgroundSize: "cover",
              backgroundPosition: "60% 45%",
              maskImage:
                "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)",
            }}
          />
          <SohraiTile
            id="ws-empty-tile"
            color="#8C2F1B"
            opacity={0.05}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />

          <div className="relative mx-auto grid h-24 w-24 place-items-center">
            <span className="absolute inset-0 rounded-full border border-dashed border-clay/30" />
            <span
              className="absolute inset-0 rounded-full border border-clay/15"
              style={{ animation: "spin 34s linear infinite" }}
            />
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-leaf to-clay text-white shadow-[0_22px_44px_-20px_rgba(46,107,79,0.7)]">
              <IconWorksheet className="h-8 w-8" />
            </span>
          </div>

          <h2 className="relative mt-7 font-display text-[1.55rem] font-semibold tracking-tight text-ink sm:text-[1.9rem]">
            Your worksheet will appear here
          </h2>
          <p className="font-deva relative mx-auto mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">
            बाईं ओर कक्षा, विषय और विषय-वस्तु चुनकर «Generate Worksheet» दबाएँ। आपके लिए
            एक हिन्दी अभ्यास पत्रिका तैयार होगी — जिसे आप कक्षा में बाँट सकती हैं।
          </p>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-2 text-left">
            {preview.map((row) => (
              <div
                key={row.hi}
                className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white/85 px-4 py-3"
              >
                <span className="h-3 w-3 shrink-0 rounded-[3px] border border-ink/20 bg-white" />
                <span className="font-deva flex-1 text-[13px] text-ink/70">{row.hi}</span>
                <span className="hidden h-4 flex-1 items-end gap-1 sm:flex">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="block h-px flex-1 bg-ink/15"
                      style={{ width: `${row.w}` }}
                    />
                  ))}
                </span>
              </div>
            ))}
          </div>

          <p className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[12px] font-medium text-ink/50">
            <IconSparkle className="h-3.5 w-3.5 text-clay" />
            Designed for primary FLN classrooms · प्राथमिक FLN कक्षा के लिए
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ── loading ─────────────────────────────────────────────────────────────── */

export function WorksheetLoader({ stage }: { stage: number }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      <div className="relative overflow-hidden bg-ink px-6 py-10 text-white sm:px-8">
        <SohraiBand color="#DFA03C" opacity={0.16} className="absolute inset-x-0 top-0 h-6" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-leaf/25 blur-[80px]" />

        <div className="relative mx-auto grid h-40 w-40 place-items-center">
          <span
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ochre/30"
            style={{ animation: "spin 40s linear infinite" }}
          />
          <OrbitRing size={128} duration={2.6} dotClass="bg-ochre shadow-[0_0_14px_3px_rgba(223,160,60,0.55)]" dotSize={9} />
          <OrbitRing size={96} duration={1.8} reverse dotClass="bg-clay" dotSize={7} />
          <OrbitRing size={150} duration={3.4} dotClass="bg-paper/70" dotSize={5} />

          <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-leaf to-clay shadow-[0_18px_36px_-16px_rgba(46,107,79,0.9)]">
            <BridgeMark className="h-11 w-11 rounded-xl" />
          </span>
        </div>

        <div className="relative mt-6 text-center">
          <h2 className="font-display text-[1.4rem] font-semibold tracking-tight sm:text-[1.65rem]">
            Creating your worksheet…
          </h2>
          <p className="font-deva mt-1.5 text-[14px] text-ochre">
            आपकी अभ्यास पत्रिका तैयार हो रही है — कृपया प्रतीक्षा करें
          </p>
          <p
            key={stage}
            className="font-deva mx-auto mt-4 max-w-sm animate-rise text-[13px] text-white/55"
          >
            {LOAD_STAGES[stage]}
          </p>
        </div>
      </div>

      {/* skeleton — question count is known, content is not */}
      <div className="space-y-4 px-6 py-7 sm:px-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-3.5">
            <span className="mt-1 grid h-7 w-7 shrink-0 animate-pulse place-items-center rounded-lg bg-ink/[0.07] text-[11px] font-bold text-ink/30">
              {i + 1}
            </span>
            <div className="flex-1 space-y-2">
              <span
                className="block h-3.5 rounded-full bg-gradient-to-r from-ink/[0.08] via-ink/[0.12] to-ink/[0.08] bg-[length:200%_100%]"
                style={{
                  width: `${[92, 78, 86, 70, 80][i]}%`,
                  animation: `shimmer-x 1.6s ease-in-out ${i * 0.16}s infinite`,
                }}
              />
              <span className="block h-10 w-full rounded-lg border border-ink/[0.07] bg-ink/[0.02]" />
            </div>
          </div>
        ))}
        <p className="flex items-center justify-center gap-2 border-t border-ink/[0.07] pt-5 text-[12px] text-ink/40">
          <IconSparkle className="h-3.5 w-3.5 text-clay" />
          इसमें कुछ सेकंड लग सकते हैं
        </p>
      </div>
    </div>
  );
}

/* ── error ───────────────────────────────────────────────────────────────── */

export function WorksheetErrorState({
  message,
  onRetry,
  kind = "unknown",
}: {
  message: string;
  onRetry: () => void;
  kind?: string;
}) {
  const hint =
    kind === "network"
      ? "The FastAPI server could not be reached. Please make sure it is running."
      : kind === "timeout"
        ? "The server took too long. Please try again in a moment."
        : kind === "invalid-request"
          ? "Please check the class, subject and topic, then try again."
          : null;

  return (
    <Reveal delay={60}>
      <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-clay" />
        <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-clay/20 bg-clay/[0.08]">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-clay"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4.5" />
              <circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <h2 className="mt-6 font-display text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.6rem]">
            We couldn't create your worksheet
          </h2>
          <p className="font-deva mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/65">
            {message}
          </p>
          <p className="font-deva mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink/45">
            क्षमा करें, इस समय अभ्यास पत्रिका तैयार नहीं हो पाई। कृपया पुनः प्रयास करें।
          </p>

          {hint && (
            <p className="mx-auto mt-3 max-w-md rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/50">
              {hint}
            </p>
          )}

          <button
            type="button"
            onClick={onRetry}
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-18px_rgba(18,14,12,0.9)]"
          >
            <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
            Try Again
            <span className="font-deva text-[13px] font-semibold text-ochre">पुनः प्रयास</span>
          </button>

          <p className="mt-5 text-[12px] text-ink/35">
            आपकी कक्षा और विषय याद रखे गए हैं — दोबारा भरने की आवश्यकता नहीं है।
          </p>

          <details className="mx-auto mt-7 max-w-sm text-left">
            <summary className="cursor-pointer list-none text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/30 hover:text-ink/50">
              Developer · connection
            </summary>
            <p className="mt-2.5 rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[11.5px] leading-relaxed text-ink/45">
              POST{" "}
              <code className="rounded bg-ink/[0.06] px-1 py-0.5 text-[11px]">
                {getApiBaseUrl()}
                {WORKSHEET_GENERATE_PATH}
              </code>
              <br />
              Set <code className="text-[11px]">VITE_API_BASE_URL</code> to point at the
              FastAPI service. The request body is built from the live{" "}
              <code className="text-[11px]">/openapi.json</code> schema.
              <br />
              If this page is served from another origin, FastAPI must allow it via{" "}
              <code className="text-[11px]">CORSMiddleware</code>.
            </p>
          </details>
        </div>
      </div>
    </Reveal>
  );
}

```

---

## FILE: `src/index.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@300..800&family=Noto+Sans+Devanagari:wght@400..700&family=Noto+Sans+Ol+Chiki:wght@400..700&display=swap");
@import "tailwindcss";

@theme {
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-display: "Fraunces", "Iowan Old Style", Georgia, serif;
  --font-deva: "Noto Sans Devanagari", "Nirmala UI", "Mangal", sans-serif;
  --font-olchiki: "Noto Sans Ol Chiki", "Sans", sans-serif;

  --color-ink: #120e0c;
  --color-ink-2: #1d1613;
  --color-ink-3: #2a2019;
  --color-paper: #fbf5ec;
  --color-paper-2: #f3e8d8;
  --color-paper-3: #e7d8c3;
  --color-clay: #c1502e;
  --color-clay-2: #8c2f1b;
  --color-ochre: #dfa03c;
  --color-leaf: #2e6b4f;
  --color-mid: #23326b;

  --animate-float: float 9s ease-in-out infinite;
  --animate-float-slow: float 15s ease-in-out infinite;
  --animate-drift: drift 30s ease-in-out infinite alternate;
  --animate-spin-slow: spin 26s linear infinite;
  --animate-spin-slower: spin 60s linear infinite;
  --animate-pulse-ring: pulse-ring 2.8s cubic-bezier(0.2, 0.6, 0.3, 1) infinite;
  --animate-bob: bob 4s ease-in-out infinite;
  --animate-shine: shine 3.4s ease-in-out infinite;
  --animate-rise: rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  --animate-glow: glow 5s ease-in-out infinite;
  --animate-ticker: ticker 34s linear infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -16px, 0);
  }
}
@keyframes bob {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(-1.2deg);
  }
}
@keyframes drift {
  0% {
    transform: scale(1.06) translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1.14) translate3d(-2.5%, -1.5%, 0);
  }
}
@keyframes pulse-ring {
  0% {
    transform: scale(0.85);
    opacity: 0.55;
  }
  70% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes shine {
  0% {
    transform: translateX(-130%) skewX(-18deg);
  }
  55%,
  100% {
    transform: translateX(230%) skewX(-18deg);
  }
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translate3d(0, 26px, 0) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}
@keyframes glow {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 0.85;
  }
}
@keyframes ticker {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes spin-rev {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@keyframes shimmer-x {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
@keyframes wave-bar {
  0%,
  100% {
    transform: scaleY(0.55);
    opacity: 0.55;
  }
  50% {
    transform: scaleY(2.1);
    opacity: 1;
  }
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

::selection {
  background: var(--color-ochre);
  color: #1a1208;
}

@layer utilities {
  .glass-dark {
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.13),
      rgba(255, 255, 255, 0.04)
    );
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.16);
  }
  .glass-light {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    border: 1px solid rgba(28, 21, 18, 0.08);
  }
  .grain::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.22;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
  }
  .text-gradient-clay {
    background: linear-gradient(100deg, #f6c88a 0%, #e79a55 42%, #c9603a 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .text-gradient-ink {
    background: linear-gradient(100deg, #1d1613 0%, #8c2f1b 55%, #c1502e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .shadow-lift {
    box-shadow:
      0 1px 2px rgba(18, 14, 12, 0.06),
      0 12px 28px -14px rgba(18, 14, 12, 0.18),
      0 40px 70px -50px rgba(18, 14, 12, 0.4);
  }
  .reveal {
    opacity: 0;
    transform: translate3d(0, 28px, 0);
    transition:
      opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }
  .reveal-in {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .tilt {
    transform: perspective(1200px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))
      translate3d(0, var(--ty, 0px), 0);
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    transform-style: preserve-3d;
  }
  .tilt-live {
    transition: transform 0.12s linear;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    scrollbar-width: none;
  }

  /* flashcard flip */
  .flip-scene {
    perspective: 1600px;
  }
  .flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .flip-inner.is-flipped {
    transform: rotateY(180deg);
  }
  .flip-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: flex;
    flex-direction: column;
  }
  .flip-face-back {
    transform: rotateY(180deg);
  }
}

@media print {
  header,
  footer,
  .print\:hidden {
    display: none !important;
  }
  body {
    background: #fff;
  }
  main {
    padding: 0 !important;
  }
  article,
  section {
    box-shadow: none !important;
    break-inside: avoid;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

```

---

## FILE: `src/lib/glossary.ts`

```typescript
export type GlossaryEntry = {
  hindi: string;
  santhali: string;
  roman: string;
  meaning: string;
  tags: SubjectTag[];
};

export type SubjectTag = "math" | "language" | "evs" | "core";

/**
 * Offline prototype dictionary (sample).
 * Real classroom use requires validation by a Santhali (Ol Chiki) language expert.
 */
export const GLOSSARY: GlossaryEntry[] = [
  { hindi: "पानी", santhali: "ᱫᱟᱜ", roman: "dag", meaning: "water", tags: ["evs", "core"] },
  { hindi: "माँ", santhali: "ᱟᱭᱳ", roman: "ayo", meaning: "mother", tags: ["evs", "core"] },
  { hindi: "पिता", santhali: "ᱵᱟᱵᱟ", roman: "baba", meaning: "father", tags: ["evs", "core"] },
  { hindi: "हाथ", santhali: "ᱛᱤ", roman: "ti", meaning: "hand", tags: ["evs"] },
  { hindi: "आँख", santhali: "ᱢᱮᱫ", roman: "med", meaning: "eye", tags: ["evs"] },
  { hindi: "पेड़", santhali: "ᱫᱟᱨᱮ", roman: "dare", meaning: "tree", tags: ["evs"] },
  { hindi: "जंगल", santhali: "ᱵᱤᱨ", roman: "bir", meaning: "forest", tags: ["evs"] },
  { hindi: "गाँव", santhali: "ᱟᱹᱛᱩ", roman: "atu", meaning: "village", tags: ["evs", "core"] },
  { hindi: "घर", santhali: "ᱚᱲᱟᱜ", roman: "orag", meaning: "house", tags: ["evs", "core"] },
  { hindi: "मिट्टी", santhali: "ᱦᱟᱥᱟ", roman: "hasa", meaning: "soil", tags: ["evs"] },
  { hindi: "आकाश", santhali: "ᱥᱮᱨᱢᱟ", roman: "serma", meaning: "sky", tags: ["evs"] },
  { hindi: "चाँद", santhali: "ᱪᱟᱸᱫᱚ", roman: "chando", meaning: "moon", tags: ["evs"] },
  { hindi: "सूरज", santhali: "ᱥᱤᱝᱜᱤ", roman: "singi", meaning: "sun", tags: ["evs"] },
  { hindi: "बड़ा", santhali: "ᱢᱟᱨᱟᱝ", roman: "marang", meaning: "big", tags: ["core"] },
  { hindi: "छोटा", santhali: "ᱦᱩᱰᱤᱧ", roman: "hudin", meaning: "small", tags: ["math", "core"] },
  { hindi: "एक", santhali: "ᱢᱤᱫ", roman: "mit", meaning: "one", tags: ["math", "core"] },
  { hindi: "दो", santhali: "ᱵᱟᱨ", roman: "bar", meaning: "two", tags: ["math", "core"] },
  { hindi: "तीन", santhali: "ᱯᱮ", roman: "pe", meaning: "three", tags: ["math", "core"] },
  { hindi: "चार", santhali: "ᱯᱳᱱ", roman: "pon", meaning: "four", tags: ["math"] },
  { hindi: "पाँच", santhali: "ᱢᱚᱬᱮ", roman: "mone", meaning: "five", tags: ["math"] },
  { hindi: "किताब", santhali: "ᱯᱩᱛᱷᱤ", roman: "puthi", meaning: "book", tags: ["language", "core"] },
  { hindi: "कहानी", santhali: "ᱠᱟᱹᱦᱱᱤ", roman: "kahni", meaning: "story", tags: ["language"] },
  { hindi: "अक्षर", santhali: "ᱪᱤᱠᱤ", roman: "chiki", meaning: "letter / script", tags: ["language"] },
  { hindi: "शिक्षक", santhali: "ᱢᱟᱪᱮᱫ", roman: "mached", meaning: "teacher", tags: ["language", "core"] },
  { hindi: "विद्यार्थी", santhali: "ᱯᱟᱹᱴᱷᱣᱟᱹ", roman: "pathwa", meaning: "student", tags: ["language"] },
  { hindi: "अच्छा", santhali: "ᱵᱷᱟᱞ", roman: "bhal", meaning: "good", tags: ["core"] },
  { hindi: "खाना", santhali: "ᱡᱚᱢ", roman: "jom", meaning: "to eat", tags: ["evs"] },
  { hindi: "पीना", santhali: "ᱧᱩ", roman: "nu", meaning: "to drink", tags: ["evs"] },
  { hindi: "जाना", santhali: "ᱥᱮᱱ", roman: "sen", meaning: "to go", tags: ["core"] },
  { hindi: "रास्ता", santhali: "ᱰᱟᱦᱟᱨ", roman: "dahar", meaning: "road", tags: ["evs"] },
];

const INDEX = new Map<string, GlossaryEntry>();
GLOSSARY.forEach((entry) => INDEX.set(entry.hindi, entry));

export function lookup(word: string): GlossaryEntry | undefined {
  const clean = word.replace(/[।,.!?;:"'()]/g, "").trim();
  if (!clean) return undefined;
  return INDEX.get(clean) ?? INDEX.get(clean.replace(/(ो|े|ी|ा|ु)$/u, ""));
}

export function glossaryForSubject(subject: "math" | "language" | "evs", limit = 6) {
  const primary = GLOSSARY.filter((e) => e.tags.includes(subject));
  const core = GLOSSARY.filter((e) => !primary.includes(e) && e.tags.includes("core"));
  return [...primary, ...core].slice(0, limit);
}

export type Token = {
  text: string;
  entry?: GlossaryEntry;
  trailing?: string;
};

/** Word-level prototype translation: matched tokens map to Ol Chiki, rest stay Hindi. */
export function translateLine(line: string): Token[] {
  return line.split(/(\s+)/).map((chunk) => {
    if (!chunk.trim()) return { text: chunk };
    const entry = lookup(chunk);
    const trailingMatch = chunk.match(/[।,.!?;:]+$/u);
    return {
      text: entry ? entry.santhali : chunk,
      entry,
      trailing: trailingMatch ? trailingMatch[0] : undefined,
    };
  });
}

export function coverageRatio(lines: string[]): number {
  const all = lines.flatMap((l) => translateLine(l));
  const words = all.filter((t) => t.text.trim());
  if (!words.length) return 0;
  const matched = words.filter((t) => t.entry).length;
  return Math.round((matched / words.length) * 100);
}

```

---

## FILE: `src/lib/lesson.ts`

```typescript
import type { LessonContent } from "@/services/api";
import type { ClassLevel, SubjectId } from "./store";

/**
 * NOTE: this module contains NO lesson content and NO generated text.
 * All teaching content comes from the FastAPI backend (see lib/api.ts).
 * Only UI-facing metadata lives here: topic ideas for the input field,
 * section labels for the result layout, and a text export of a lesson the
 * backend actually returned.
 */

export const TOPIC_IDEAS: Record<SubjectId, Record<ClassLevel, string[]>> = {
  math: {
    1: ["1 से 5 तक गिनती", "आकार पहचानो", "छोटा-बड़ा"],
    2: ["जोड़", "10 तक गिनती", "पैटर्न"],
    3: ["जोड़ — समूह में", "घटाव", "पैसों का लेन-देन"],
    4: ["गुणा", "आधा और दोगुना", "समय पढ़ना"],
    5: ["भाग — बराबर बाँटना", "माप: मीटर और लीटर", "आँकड़े"],
  },
  language: {
    1: ["स्वर अक्षर", "मेरा नाम", "बालगीत"],
    2: ["मात्रा — आ और इ", "सरल वाक्य", "लोककथा"],
    3: ["शब्द बनाना", "चित्र वर्णन", "कविता: मेरा गाँव"],
    4: ["संज्ञा", "कहानी का क्रम", "अनुच्छेद लेखन"],
    5: ["विशेषण", "संवाद लेखन", "जनजातीय लोककथा"],
  },
  evs: {
    1: ["मेरा शरीर", "घर के जानवर", "साफ़ पानी"],
    2: ["पेड़ और पत्तियाँ", "मेरा परिवार", "मौसम"],
    3: ["पेड़-पौधे", "पशु-पक्षी", "गाँव का बाज़ार"],
    4: ["खाद्य फसलें", "जल का स्रोत", "पक्षियों का घोंसला"],
    5: ["वन और वन्यजीव", "बीज से पौधा", "हमारा जिला"],
  },
};

export function topicIdeas(subject: SubjectId, classLevel: ClassLevel): string[] {
  return TOPIC_IDEAS[subject][classLevel];
}

export const SUBJECT_API_NAME: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export const SUBJECT_HINDI: Record<SubjectId, string> = {
  math: "गणित",
  language: "भाषा",
  evs: "पर्यावरण अध्ययन",
};

/** The five teaching sections the backend must return. */
export const LESSON_SECTIONS = [
  {
    key: "learningObjective",
    label: "Learning Objective",
    hindi: "सीखने का उद्देश्य",
  },
  {
    key: "simpleExplanation",
    label: "Simple Explanation",
    hindi: "सरल व्याख्या",
  },
  {
    key: "classroomActivity",
    label: "Classroom Activity",
    hindi: "कक्षा गतिविधि",
  },
  {
    key: "practiceQuestions",
    label: "Practice Questions",
    hindi: "अभ्यास प्रश्न",
  },
  {
    key: "shortAssessment",
    label: "Short Assessment",
    hindi: "लघु मूल्यांकन",
  },
] as const;

export type LessonSectionKey = (typeof LESSON_SECTIONS)[number]["key"];

/** Plain-text export of a lesson actually returned by the API. */
export function lessonToPlainText(lesson: LessonContent): string {
  const rows: [string, string, string[]][] = [
    ["Learning Objective", "सीखने का उद्देश्य", lesson.learningObjective],
    ["Simple Explanation", "सरल व्याख्या", lesson.simpleExplanation],
    ["Classroom Activity", "कक्षा गतिविधि", lesson.classroomActivity],
    ["Practice Questions", "अभ्यास प्रश्न", lesson.practiceQuestions],
    ["Short Assessment", "लघु मूल्यांकन", lesson.shortAssessment],
  ];

  const lines: string[] = [
    "भाषा सेतु — पाठ योजना",
    `विषय: ${lesson.topic}`,
    `कक्षा ${lesson.classLevel} · ${lesson.subject}`,
    "",
  ];

  rows.forEach(([en, hi, items]) => {
    if (!items.length) return;
    lines.push(`${hi} (${en})`);
    items.forEach((item, i) =>
      lines.push(en === "Simple Explanation" ? item : `${i + 1}. ${item}`),
    );
    lines.push("");
  });

  lines.push(
    "— भाषा सेतु द्वारा तैयार। कक्षा में पढ़ाने से पहले शिक्षक इसे अपने अनुसार बदल सकते हैं।",
  );
  return lines.join("\n");
}

```

---

## FILE: `src/lib/router.tsx`

```tsx
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

export type RoutePath =
  | "/"
  | "/lesson-generator"
  | "/translation-studio"
  | "/worksheet-generator"
  | "/flashcard-generator";

export const ROUTES = {
  dashboard: "/",
  lessonGenerator: "/lesson-generator",
  translationStudio: "/translation-studio",
  worksheetGenerator: "/worksheet-generator",
  flashcardGenerator: "/flashcard-generator",
} as const;

function readHash(): string {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return ROUTES.dashboard;
  return raw.startsWith("/") ? raw : `/${raw}`;
}

export function navigate(to: string): void {
  if (typeof window === "undefined") return;
  if (readHash() === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = to;
}

export function useRoute(): string {
  const [path, setPath] = useState<string>(() => readHash());

  useEffect(() => {
    const onChange = () => setPath(readHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return path;
}

type LinkProps = {
  to: string;
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Link({ to, children, className, ariaLabel }: LinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={`#${to}`} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

```

---

## FILE: `src/lib/store.tsx`

```tsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ROUTES, navigate } from "./router";

export const CLASSES = [1, 2, 3, 4, 5] as const;
export type ClassLevel = (typeof CLASSES)[number];

export type SubjectId = "math" | "language" | "evs";

export type Subject = {
  id: SubjectId;
  label: string;
  hindi: string;
  blurb: string;
};

export const SUBJECTS: Subject[] = [
  {
    id: "math",
    label: "Mathematics",
    hindi: "गणित",
    blurb: "गिनती, जोड़-घटाव, आकार",
  },
  {
    id: "language",
    label: "Language",
    hindi: "भाषा",
    blurb: "वर्ण, कहानी, कविता",
  },
  {
    id: "evs",
    label: "EVS",
    hindi: "पर्यावरण अध्ययन",
    blurb: "पेड़-पौधे, जीव-जन्तु, पानी",
  },
];

export const MOTHER_TONGUE = {
  name: "Santhali",
  script: "ᱥᱟᱱᱛᱟᱲᱤ",
  scriptName: "Ol Chiki",
  source: "Hindi",
  sourceScript: "हिन्दी",
  region: "Jharkhand",
} as const;

type TeachingState = {
  classLevel: ClassLevel;
  setClassLevel: (value: ClassLevel) => void;
  subject: SubjectId;
  setSubject: (value: SubjectId) => void;
  subjectMeta: Subject;
  pendingSourceText: string;
  openTranslationStudio: (text: string) => void;
  consumeHandoff: () => string;
};

const TeachingContext = createContext<TeachingState | null>(null);

const STORAGE_KEY = "bhasha-setu:teaching-context";

export function TeachingProvider({ children }: { children: ReactNode }) {
  const [classLevel, setClassLevel] = useState<ClassLevel>(3);
  const [subject, setSubject] = useState<SubjectId>("evs");
  const [pendingSourceText, setPendingSourceText] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { classLevel?: number; subject?: SubjectId };
      if (parsed.classLevel && CLASSES.includes(parsed.classLevel as ClassLevel)) {
        setClassLevel(parsed.classLevel as ClassLevel);
      }
      if (parsed.subject && SUBJECTS.some((s) => s.id === parsed.subject)) {
        setSubject(parsed.subject);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ classLevel, subject }));
    } catch {
      /* ignore */
    }
  }, [classLevel, subject]);

  const subjectMeta = useMemo(
    () => SUBJECTS.find((s) => s.id === subject) ?? SUBJECTS[0],
    [subject],
  );

  const openTranslationStudio = useCallback((text: string) => {
    setPendingSourceText(text);
    navigate(ROUTES.translationStudio);
  }, []);

  const consumeHandoff = useCallback(() => {
    const text = pendingSourceText;
    setPendingSourceText("");
    return text;
  }, [pendingSourceText]);

  const value: TeachingState = {
    classLevel,
    setClassLevel,
    subject,
    setSubject,
    subjectMeta,
    pendingSourceText,
    openTranslationStudio,
    consumeHandoff,
  };

  return <TeachingContext.Provider value={value}>{children}</TeachingContext.Provider>;
}

export function useTeaching(): TeachingState {
  const ctx = useContext(TeachingContext);
  if (!ctx) throw new Error("useTeaching must be used inside TeachingProvider");
  return ctx;
}

```

---

## FILE: `src/lib/useFlashcardGeneration.ts`

```typescript
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ApiError,
  TEACHER_MESSAGES,
} from "@/services/schema";
import {
  generateFlashcards,
  type FlashcardRequest,
  type FlashcardSet,
} from "@/services/flashcard";

export type GenStatus = "idle" | "loading" | "success" | "error";

export function useFlashcardGeneration() {
  const [status, setStatus] = useState<GenStatus>("idle");
  const [set, setSet] = useState<FlashcardSet | null>(null);
  const [error, setError] = useState<string>("");
  const [errorKind, setErrorKind] = useState<string>("unknown");
  const [lastRequest, setLastRequest] = useState<FlashcardRequest | null>(null);

  const inFlight = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const abort = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
  }, []);

  useEffect(() => abort, [abort]);

  const run = useCallback(
    async (request: FlashcardRequest) => {
      if (inFlight.current) return; // ignore duplicate clicks while loading
      inFlight.current = true;

      abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLastRequest(request);
      setStatus("loading");
      setError("");
      setErrorKind("unknown");
      setSet(null);

      try {
        const result = await generateFlashcards(request, controller.signal);
        if (controller.signal.aborted) return;
        setSet(result);
        setStatus("success");
      } catch (err) {
        if (controller.signal.aborted) return;
        const apiError = err instanceof ApiError ? err : null;
        setError(apiError?.message || TEACHER_MESSAGES.unknown);
        setErrorKind(apiError?.kind ?? "unknown");
        setStatus("error");
      } finally {
        if (abortRef.current === controller) abortRef.current = null;
        inFlight.current = false;
      }
    },
    [abort],
  );

  const retry = useCallback(() => {
    if (lastRequest) void run(lastRequest);
  }, [lastRequest, run]);

  return { status, set, error, errorKind, run, retry };
}

```

---

## FILE: `src/lib/useLessonGeneration.ts`

```typescript
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ApiError,
  TEACHER_MESSAGES,
  generateLesson,
  type LessonContent,
  type LessonRequest,
} from "@/services/api";

export type GenStatus = "idle" | "loading" | "success" | "error";

export function useLessonGeneration() {
  const [status, setStatus] = useState<GenStatus>("idle");
  const [lesson, setLesson] = useState<LessonContent | null>(null);
  const [error, setError] = useState<string>("");
  const [errorKind, setErrorKind] = useState<string>("unknown");
  const [lastRequest, setLastRequest] = useState<LessonRequest | null>(null);

  // guards against duplicate / concurrent submissions
  const inFlight = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const abort = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
  }, []);

  useEffect(() => abort, [abort]);

  const run = useCallback(
    async (request: LessonRequest) => {
      if (inFlight.current) return; // ignore duplicate clicks while loading
      inFlight.current = true;

      abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLastRequest(request);
      setStatus("loading");
      setError("");
      setErrorKind("unknown");
      setLesson(null);

      try {
        const result = await generateLesson(request, controller.signal);
        if (controller.signal.aborted) return;
        setLesson(result);
        setStatus("success");
      } catch (err) {
        if (controller.signal.aborted) return;
        const apiError = err instanceof ApiError ? err : null;
        setError(apiError?.message || TEACHER_MESSAGES.unknown);
        setErrorKind(apiError?.kind ?? "unknown");
        setStatus("error");
      } finally {
        if (abortRef.current === controller) abortRef.current = null;
        inFlight.current = false;
      }
    },
    [abort],
  );

  const retry = useCallback(() => {
    if (lastRequest) void run(lastRequest);
  }, [lastRequest, run]);

  return { status, lesson, error, errorKind, run, retry };
}

```

---

## FILE: `src/lib/useWorksheetGeneration.ts`

```typescript
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ApiError,
  TEACHER_MESSAGES,
} from "@/services/schema";
import {
  generateWorksheet,
  type Worksheet,
  type WorksheetRequest,
} from "@/services/worksheet";

export type GenStatus = "idle" | "loading" | "success" | "error";

export function useWorksheetGeneration() {
  const [status, setStatus] = useState<GenStatus>("idle");
  const [worksheet, setWorksheet] = useState<Worksheet | null>(null);
  const [error, setError] = useState<string>("");
  const [errorKind, setErrorKind] = useState<string>("unknown");
  const [lastRequest, setLastRequest] = useState<WorksheetRequest | null>(null);

  const inFlight = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const abort = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
  }, []);

  useEffect(() => abort, [abort]);

  const run = useCallback(
    async (request: WorksheetRequest) => {
      if (inFlight.current) return; // ignore duplicate clicks while loading
      inFlight.current = true;

      abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLastRequest(request);
      setStatus("loading");
      setError("");
      setErrorKind("unknown");
      setWorksheet(null);

      try {
        const result = await generateWorksheet(request, controller.signal);
        if (controller.signal.aborted) return;
        setWorksheet(result);
        setStatus("success");
      } catch (err) {
        if (controller.signal.aborted) return;
        const apiError = err instanceof ApiError ? err : null;
        setError(apiError?.message || TEACHER_MESSAGES.unknown);
        setErrorKind(apiError?.kind ?? "unknown");
        setStatus("error");
      } finally {
        if (abortRef.current === controller) abortRef.current = null;
        inFlight.current = false;
      }
    },
    [abort],
  );

  const retry = useCallback(() => {
    if (lastRequest) void run(lastRequest);
  }, [lastRequest, run]);

  return { status, worksheet, error, errorKind, run, retry };
}

```

---

## FILE: `src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

---

## FILE: `src/pages/Dashboard.tsx`

```tsx
import { Hero } from "@/components/dashboard/Hero";
import { LanguageIndicator } from "@/components/dashboard/LanguageIndicator";
import { ContextBar } from "@/components/dashboard/ContextBar";
import { FeatureCards } from "@/components/dashboard/FeatureCards";
import { Reveal } from "@/components/ui/Reveal";

const FLOW = [
  {
    step: "1",
    title: "कक्षा और विषय चुनें",
    text: "Set class & subject once — every tool follows it.",
  },
  {
    step: "2",
    title: "पाठ बनाएँ या अनुवाद करें",
    text: "Generate a Hindi lesson or translate existing content.",
  },
  {
    step: "3",
    title: "कक्षा में पढ़ाएँ",
    text: "Teach with a bilingual bridge for your students.",
  },
];

function FlowStrip() {
  return (
    <Reveal delay={120} className="mt-10 sm:mt-12">
      <div className="grid gap-3 sm:grid-cols-3">
        {FLOW.map((item, i) => (
          <div
            key={item.step}
            className="group relative flex items-start gap-3 rounded-2xl border border-ink/[0.08] bg-white/60 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/30 hover:bg-white"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-ochre to-clay text-[13px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
              {item.step}
            </span>
            <div>
              <p className="font-deva text-[13.5px] font-semibold text-ink">{item.title}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-ink/50">{item.text}</p>
            </div>
            {i < FLOW.length - 1 && (
              <span className="absolute -right-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-ink/[0.08] bg-white/60 sm:block" />
            )}
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function Dashboard() {
  return (
    <>
      <Hero />
      <LanguageIndicator />
      <main className="relative">
        {/* warm paper body */}
        <div className="relative bg-paper">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-[0.5]"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, rgba(193,80,46,0.10), transparent 70%)",
            }}
          />
          <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-0 sm:px-6">
            <ContextBar className="-mt-14 sm:-mt-16" />
            <FlowStrip />
            <FeatureCards />
          </div>
        </div>
      </main>
    </>
  );
}

```

---

## FILE: `src/pages/FlashcardGenerator.tsx`

```tsx
import { useEffect, useState } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { FlashcardForm } from "@/components/flashcard/FlashcardForm";
import {
  FlashcardEmptyState,
  FlashcardErrorState,
  FlashcardLoader,
} from "@/components/flashcard/FlashcardStates";
import { FlashcardResult } from "@/components/flashcard/FlashcardResult";
import { useTeaching, SUBJECTS } from "@/lib/store";
import { topicIdeas } from "@/lib/lesson";
import { useFlashcardGeneration } from "@/lib/useFlashcardGeneration";
import { IconFlashcards } from "@/components/ui/Icons";

const LOAD_STAGE_MS = 2200;

export function FlashcardGenerator() {
  const { classLevel, setClassLevel, subject, setSubject } = useTeaching();

  const [topic, setTopic] = useState(() => topicIdeas("evs", 3)[0]);
  const [cardCount, setCardCount] = useState(10);
  const [loadStage, setLoadStage] = useState(0);

  const { status, set, error, errorKind, run, retry } = useFlashcardGeneration();

  useEffect(() => {
    setTopic(topicIdeas(subject, classLevel)[0]);
  }, [subject, classLevel]);

  useEffect(() => {
    if (status !== "loading") {
      setLoadStage(0);
      return;
    }
    const id = window.setInterval(() => {
      setLoadStage((s) => (s < 3 ? s + 1 : s));
    }, LOAD_STAGE_MS);
    return () => window.clearInterval(id);
  }, [status]);

  const submit = () => {
    void run({ classLevel, subject, topic, cardCount });
  };

  useEffect(() => {
    if (status !== "success") return;
    const id = window.setTimeout(() => {
      document
        .getElementById("flashcard-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [status]);

  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? "";

  return (
    <>
      <ToolHeader
        index="04 · Flashcard Generator"
        title="Flashcard Generator"
        hindiTitle="फ़्लैशकार्ड — प्राथमिक FLN कक्षा के लिए याददाश्त कार्ड"
        description="Choose your class and subject, type a topic, and get a deck of Hindi flashcards you can flip through in class — built for primary foundational literacy and numeracy classrooms."
        icon={<IconFlashcards className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <span className="rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/55">
            कक्षा {classLevel} · {subjectLabel}
          </span>
        }
      />

      <main className="bg-paper">
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-9 sm:px-6 sm:py-11">
          <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-8">
            <FlashcardForm
              classLevel={classLevel}
              onClassChange={setClassLevel}
              subject={subject}
              onSubjectChange={setSubject}
              topic={topic}
              onTopicChange={setTopic}
              cardCount={cardCount}
              onCardCountChange={setCardCount}
              onSubmit={submit}
              loading={status === "loading"}
              hasResult={status === "success"}
            />

            <div id="flashcard-result" className="min-w-0 scroll-mt-28">
              {status === "idle" && <FlashcardEmptyState />}
              {status === "loading" && <FlashcardLoader stage={loadStage} />}
              {status === "error" && (
                <FlashcardErrorState message={error} onRetry={retry} kind={errorKind} />
              )}
              {status === "success" && set && <FlashcardResult set={set} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

```

---

## FILE: `src/pages/LessonGenerator.tsx`

```tsx
import { useEffect, useState } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { LessonForm } from "@/components/lesson/LessonForm";
import { LessonLoader } from "@/components/lesson/LessonLoader";
import { LessonResult } from "@/components/lesson/LessonResult";
import { LessonEmptyState, LessonErrorState } from "@/components/lesson/LessonStates";
import { useTeaching, SUBJECTS } from "@/lib/store";
import { topicIdeas } from "@/lib/lesson";
import { useLessonGeneration } from "@/lib/useLessonGeneration";
import { IconBook } from "@/components/ui/Icons";

export function LessonGenerator() {
  const {
    classLevel,
    setClassLevel,
    subject,
    setSubject,
  } = useTeaching();

  const [topic, setTopic] = useState(() => topicIdeas("evs", 3)[0]);
  const { status, lesson, error, errorKind, run, retry } = useLessonGeneration();

  // reflect dashboard context into the form when it changes
  useEffect(() => {
    setTopic(topicIdeas(subject, classLevel)[0]);
  }, [subject, classLevel]);

  const submit = () => {
    void run({ classLevel, subject, topic });
  };

  // scroll the result into view once the lesson is ready (mobile especially)
  useEffect(() => {
    if (status !== "success") return;
    const id = window.setTimeout(() => {
      document
        .getElementById("lesson-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [status]);

  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? "";

  return (
    <>
      <ToolHeader
        index="01 · Lesson Generator"
        title="Lesson Generator"
        hindiTitle="पाठ जनरेटर — प्राथमिक FLN कक्षा के लिए हिन्दी पाठ"
        description="Choose your class and subject, type a topic, and get a structured Hindi lesson you can teach from — built for primary foundational literacy and numeracy classrooms."
        icon={<IconBook className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <span className="rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/55">
            कक्षा {classLevel} · {subjectLabel}
          </span>
        }
      />

      <main className="bg-paper">
        <div
          className="pointer-events-none absolute inset-x-0 h-64 opacity-50"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, rgba(193,80,46,0.10), transparent 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-9 sm:px-6 sm:py-11">
          <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-8">
            {/* ── step 1-3: form ─────────────────────────── */}
            <LessonForm
              classLevel={classLevel}
              onClassChange={setClassLevel}
              subject={subject}
              onSubjectChange={setSubject}
              topic={topic}
              onTopicChange={setTopic}
              onSubmit={submit}
              loading={status === "loading"}
              hasResult={status === "success"}
            />

            {/* ── step 4: result ─────────────────────────── */}
            <div id="lesson-result" className="min-w-0 scroll-mt-28">
              {status === "idle" && <LessonEmptyState />}
              {status === "loading" && <LessonLoader />}
              {status === "error" && (
                <LessonErrorState message={error} onRetry={retry} kind={errorKind} />
              )}
              {status === "success" && lesson && <LessonResult lesson={lesson} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

```

---

## FILE: `src/pages/TranslationStudio.tsx`

```tsx
import { useEffect, useMemo, useState } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile } from "@/components/ui/Culture";
import {
  IconArrowRight,
  IconCheck,
  IconCopy,
  IconDownload,
  IconLanguages,
  IconSparkle,
  IconSwap,
} from "@/components/ui/Icons";
import { useTeaching } from "@/lib/store";
import { GLOSSARY, translateLine, type Token } from "@/lib/glossary";

const SAMPLES = [
  {
    label: "EVS · पानी",
    text:
      "पानी हमारे जीवन का आधार है। गाँव के सब लोग पानी लाते हैं। मिट्टी में पेड़ उगते हैं। आकाश में चाँद और सूरज हैं। हमें पानी बचाना चाहिए।",
  },
  {
    label: "गणित · गिनती",
    text:
      "एक, दो, तीन, चार, पाँच। बच्चों, अपने हाथ की उँगलियाँ गिनो। छोटा पत्थर और बड़ा पत्थर अलग-अलग करो।",
  },
  {
    label: "भाषा · कहानी",
    text:
      "माँ ने कहानी सुनाई। बच्चे घर के आँगन में बैठे थे। शिक्षक ने किताब खोली और अच्छी कहानी पढ़ी।",
  },
];

function toPlainText(lines: Token[][]): string {
  return lines.map((tokens) => tokens.map((t) => t.text).join("")).join("\n");
}

export function TranslationStudio() {
  const { consumeHandoff } = useTeaching();
  const [source, setSource] = useState(SAMPLES[0].text);
  const [lines, setLines] = useState<Token[][] | null>(null);
  const [working, setWorking] = useState(false);
  const [tab, setTab] = useState<"draft" | "review">("draft");
  const [edited, setEdited] = useState("");
  const [copied, setCopied] = useState(false);

  const run = (text: string) => {
    setWorking(true);
    window.setTimeout(() => {
      const next = text
        .split("\n")
        .map((line) => translateLine(line))
        .filter((tokens) => tokens.length);
      setLines(next);
      setEdited(toPlainText(next));
      setTab("draft");
      setWorking(false);
    }, 620);
  };

  // pick up content handed over from the Lesson Generator
  useEffect(() => {
    const handoff = consumeHandoff();
    if (handoff && handoff.trim()) {
      setSource(handoff);
      run(handoff);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const review = useMemo(() => {
    if (!lines) return [];
    const set = new Set<string>();
    lines.flat().forEach((t) => {
      if (t.text.trim() && !t.entry && !/^[।,.!?;:"'()\s\d-]+$/u.test(t.text)) set.add(t.text.trim());
    });
    return [...set].slice(0, 14);
  }, [lines]);

  const realCoverage = useMemo(() => {
    if (!lines) return 0;
    const words = lines.flat().filter((t) => t.text.trim());
    if (!words.length) return 0;
    return Math.round((words.filter((t) => t.entry).length / words.length) * 100);
  }, [lines]);

  const copyOut = async () => {
    const text = tab === "review" ? edited : lines ? toPlainText(lines) : "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const downloadOut = () => {
    const text = tab === "review" ? edited : lines ? toPlainText(lines) : "";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bhasha-setu-santhali-translation.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <ToolHeader
        index="02 · Translation Studio"
        title="Translation Studio"
        hindiTitle="अनुवाद स्टूडियो — हिन्दी से संथाली (ᱚᱞ ᱪᱤᱠᱤ)"
        description="Paste existing Hindi educational content. Bhasha Setu bridges it into Santhali line by line, and marks every word the teacher must confirm."
        icon={<IconLanguages className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <span className="rounded-xl border border-ochre/35 bg-ochre/12 px-3 py-1.5 text-[12px] font-semibold text-ochre">
            Ol Chiki · ᱥᱟᱱᱛᱟᱲᱤ
          </span>
        }
      />

      <main className="bg-paper">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-6 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* ── source ─────────────────────────────── */}
            <Reveal from="left">
              <div className="flex h-full flex-col overflow-hidden rounded-[26px] glass-light shadow-lift">
                <div className="h-1 w-full bg-gradient-to-r from-clay to-ochre" />
                <div className="flex items-center justify-between gap-3 px-5 pt-5 sm:px-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">
                      Source · Hindi
                    </p>
                    <p className="font-deva mt-0.5 text-[13px] text-ink/60">हिन्दी सामग्री यहाँ लिखें</p>
                  </div>
                  <span className="font-deva rounded-full bg-ink/[0.06] px-2.5 py-1 text-[11px] font-semibold text-ink/55">
                    {source.trim() ? source.trim().split(/\s+/).length : 0} शब्द
                  </span>
                </div>

                <div className="px-5 pt-4 sm:px-6">
                  <div className="flex flex-wrap gap-2">
                    {SAMPLES.map((s) => (
                      <button
                        key={s.label}
                        type="button"
                        onClick={() => setSource(s.text)}
                        className="font-deva rounded-full border border-ink/12 bg-white/70 px-3 py-1.5 text-[12px] text-ink/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <textarea
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    rows={11}
                    placeholder="यहाँ हिन्दी पाठ लिखें या चिपकाएँ…"
                    className="font-deva mt-4 w-full resize-none rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-[14.5px] leading-relaxed text-ink outline-none transition-all duration-300 placeholder:text-ink/30 focus:border-clay/50 focus:ring-4 focus:ring-clay/10"
                  />
                </div>

                <div className="mt-auto px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <button
                    type="button"
                    onClick={() => run(source)}
                    disabled={working || !source.trim()}
                    className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-clay-2 px-5 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-18px_rgba(140,47,27,0.95)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="absolute inset-y-0 -left-full w-1/3 bg-white/25 blur-md group-hover:animate-shine" />
                    {working ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-ochre" />
                        अनुवाद कर रहे हैं…
                      </>
                    ) : (
                      <>
                        <IconSwap className="h-4 w-4 text-ochre" />
                        Translate to Santhali
                        <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="font-deva mt-3 text-[11.5px] leading-snug text-ink/45">
                    शब्द-स्तरीय प्रोटोटाइप अनुवाद। अंतिम रूप देने से पहले संथाली भाषा विशेषज्ञ से जाँच कराएँ।
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ── output ─────────────────────────────── */}
            <Reveal from="right" delay={100}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/12 bg-ink text-white shadow-lift">
                <SohraiTile
                  id="studio-out"
                  color="#F3E7D2"
                  opacity={0.07}
                  className="pointer-events-none absolute inset-0 h-full w-full"
                />
                <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ochre">
                      Target · Santhali
                    </p>
                    <p className="font-olchiki mt-0.5 text-[14px] text-white/70">ᱥᱟᱱᱛᱟᱲᱤ ᱚᱞ ᱪᱤᱠᱤ</p>
                  </div>
                  <div className="flex rounded-xl border border-white/12 bg-white/5 p-1">
                    {(["draft", "review"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTab(t)}
                        className={`rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-all duration-300 ${
                          tab === t ? "bg-white text-ink" : "text-white/60 hover:text-white"
                        }`}
                      >
                        {t === "draft" ? "Auto draft" : "Teacher review"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative flex-1 px-5 py-5 sm:px-6">
                  {working && (
                    <div className="flex h-40 flex-col items-center justify-center gap-3 text-white/50">
                      <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-ochre" />
                      <p className="font-deva text-[13px]">ᱥᱟᱱᱛᱟᱲᱤ रूपांतरण तैयार हो रहा है…</p>
                    </div>
                  )}

                  {!working && !lines && (
                    <div className="flex h-40 flex-col items-center justify-center gap-3 text-center">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/14 bg-white/5">
                        <IconLanguages className="h-7 w-7 text-ochre" />
                      </span>
                      <p className="max-w-xs font-deva text-[13px] leading-relaxed text-white/45">
                        बाईं ओर हिन्दी सामग्री लिखकर «Translate to Santhali» दबाएँ।
                      </p>
                    </div>
                  )}

                  {!working && lines && tab === "draft" && (
                    <div className="space-y-3">
                      {lines.map((tokens, li) => (
                        <p
                          key={li}
                          className="font-deva text-[16px] leading-[2] tracking-wide text-white/85"
                        >
                          {tokens.map((token, ti) =>
                            token.entry ? (
                              <span
                                key={ti}
                                title={`${token.entry.hindi} · ${token.entry.roman} — ${token.entry.meaning}`}
                                className="font-olchiki cursor-help rounded-md bg-ochre/15 px-1 text-[17px] text-ochre"
                              >
                                {token.text}
                              </span>
                            ) : (
                              <span
                                key={ti}
                                title="शिक्षक द्वारा जाँच करें"
                                className="cursor-help rounded-md bg-ochre/5 px-1 text-white/45 underline decoration-dotted decoration-white/30 underline-offset-4"
                              >
                                {token.text}
                              </span>
                            ),
                          )}
                        </p>
                      ))}
                    </div>
                  )}

                  {!working && lines && tab === "review" && (
                    <textarea
                      value={edited}
                      onChange={(e) => setEdited(e.target.value)}
                      rows={12}
                      className="font-olchiki w-full resize-none rounded-2xl border border-white/12 bg-black/25 px-4 py-3.5 text-[17px] leading-[1.9] text-white outline-none transition-all duration-300 focus:border-ochre/60 focus:ring-4 focus:ring-ochre/10"
                    />
                  )}
                </div>

                {lines && (
                  <div className="relative border-t border-white/10 px-5 py-4 sm:px-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-24 overflow-hidden rounded-full bg-white/12">
                          <span
                            className="block h-full rounded-full bg-gradient-to-r from-leaf to-ochre transition-all duration-1000"
                            style={{ width: `${realCoverage}%` }}
                          />
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                          {realCoverage}% matched
                        </span>
                      </div>
                      <span className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-white/50">
                        {review.length} words to review
                      </span>
                      <div className="ml-auto flex gap-2">
                        <button
                          type="button"
                          onClick={copyOut}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/14 bg-white/6 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
                        >
                          {copied ? (
                            <IconCheck className="h-4 w-4 text-leaf" />
                          ) : (
                            <IconCopy className="h-4 w-4 text-ochre" />
                          )}
                          {copied ? "Copied" : "Copy"}
                        </button>
                        <button
                          type="button"
                          onClick={downloadOut}
                          className="inline-flex items-center gap-2 rounded-xl bg-ochre px-3 py-2 text-[12px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-16px_rgba(223,160,60,0.9)]"
                        >
                          <IconDownload className="h-4 w-4" />
                          Download
                        </button>
                      </div>
                    </div>

                    {review.length > 0 && (
                      <div className="mt-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                        <p className="font-deva text-[11.5px] text-white/50">
                          इन शब्दों की जाँच करें — प्रोटोटाइप शब्दकोश में नहीं हैं:
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {review.map((word) => (
                            <span
                              key={word}
                              className="font-deva rounded-lg border border-ochre/25 bg-ochre/10 px-2 py-1 text-[12px] text-ochre"
                            >
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* ── glossary reference ───────────────────── */}
          <Reveal delay={140} className="mt-6">
            <div className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
              <div className="flex flex-wrap items-center gap-3 border-b border-ink/[0.07] px-5 py-4 sm:px-6">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-ochre to-clay text-white">
                  <IconSparkle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-ink/60">
                    Prototype dictionary
                  </p>
                  <p className="font-deva text-[12.5px] text-ink/50">
                    हिन्दी → ᱥᱟᱱᱛᱟᱲᱤ ({GLOSSARY.length} शब्द · नमूना)
                  </p>
                </div>
                <p className="font-deva ml-auto hidden text-[11.5px] text-ink/40 sm:block">
                  विशेषज्ञ सत्यापन आवश्यक
                </p>
              </div>
              <div className="grid gap-px bg-ink/[0.06] sm:grid-cols-2 lg:grid-cols-4">
                {GLOSSARY.map((entry) => (
                  <div
                    key={entry.hindi}
                    className="group flex items-center gap-2.5 bg-white px-4 py-3 transition-colors duration-300 hover:bg-paper"
                  >
                    <span className="font-deva text-[13px] text-ink/70">{entry.hindi}</span>
                    <IconArrowRight className="h-3 w-3 text-ink/20 transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span className="font-olchiki text-[15px] text-clay-2">{entry.santhali}</span>
                    <span className="ml-auto text-[10px] uppercase tracking-[0.12em] text-ink/30">
                      {entry.roman}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}

```

---

## FILE: `src/pages/WorksheetGenerator.tsx`

```tsx
import { useEffect, useState } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { WorksheetForm } from "@/components/worksheet/WorksheetForm";
import {
  WorksheetEmptyState,
  WorksheetErrorState,
  WorksheetLoader,
} from "@/components/worksheet/WorksheetStates";
import { WorksheetResult } from "@/components/worksheet/WorksheetResult";
import { useTeaching, SUBJECTS } from "@/lib/store";
import { topicIdeas } from "@/lib/lesson";
import { useWorksheetGeneration } from "@/lib/useWorksheetGeneration";
import { IconWorksheet } from "@/components/ui/Icons";

const LOAD_STAGE_MS = 2200;

export function WorksheetGenerator() {
  const { classLevel, setClassLevel, subject, setSubject } = useTeaching();

  const [topic, setTopic] = useState(() => topicIdeas("evs", 3)[0]);
  const [questionCount, setQuestionCount] = useState(10);
  const [loadStage, setLoadStage] = useState(0);

  const { status, worksheet, error, errorKind, run, retry } =
    useWorksheetGeneration();

  useEffect(() => {
    setTopic(topicIdeas(subject, classLevel)[0]);
  }, [subject, classLevel]);

  // advance the loading copy while the request is in flight
  useEffect(() => {
    if (status !== "loading") {
      setLoadStage(0);
      return;
    }
    const id = window.setInterval(() => {
      setLoadStage((s) => (s < 3 ? s + 1 : s));
    }, LOAD_STAGE_MS);
    return () => window.clearInterval(id);
  }, [status]);

  const submit = () => {
    void run({ classLevel, subject, topic, questionCount });
  };

  useEffect(() => {
    if (status !== "success") return;
    const id = window.setTimeout(() => {
      document
        .getElementById("worksheet-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [status]);

  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? "";

  return (
    <>
      <ToolHeader
        index="03 · Worksheet Generator"
        title="Worksheet Generator"
        hindiTitle="अभ्यास पत्रिका — प्राथमिक FLN कक्षा के लिए हिन्दी कार्यपत्रिका"
        description="Choose your class and subject, type a topic, and get a printable Hindi worksheet with questions and an answer key — built for primary foundational literacy and numeracy classrooms."
        icon={<IconWorksheet className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <span className="rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/55">
            कक्षा {classLevel} · {subjectLabel}
          </span>
        }
      />

      <main className="bg-paper">
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-9 sm:px-6 sm:py-11">
          <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-8">
            <WorksheetForm
              classLevel={classLevel}
              onClassChange={setClassLevel}
              subject={subject}
              onSubjectChange={setSubject}
              topic={topic}
              onTopicChange={setTopic}
              questionCount={questionCount}
              onQuestionCountChange={setQuestionCount}
              onSubmit={submit}
              loading={status === "loading"}
              hasResult={status === "success"}
            />

            <div id="worksheet-result" className="min-w-0 scroll-mt-28">
              {status === "idle" && <WorksheetEmptyState />}
              {status === "loading" && <WorksheetLoader stage={loadStage} />}
              {status === "error" && (
                <WorksheetErrorState
                  message={error}
                  onRetry={retry}
                  kind={errorKind}
                />
              )}
              {status === "success" && worksheet && (
                <WorksheetResult worksheet={worksheet} />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

```

---

## FILE: `src/services/api.ts`

```typescript
/**
 * Bhasha Setu — Lesson Generator service.
 *
 * Endpoint: POST {base}/api/lesson/generate
 * The request body is derived from the live /openapi.json schema; see
 * services/schema.ts for the shared discovery + shaping machinery.
 *
 * No content is ever invented: if the response cannot be understood we
 * return null and the caller shows a friendly error instead of raw JSON.
 */

import {
  ApiError,
  TEACHER_MESSAGES,
  buildCorePayload,
  flatten,
  lookupAliases,
  loadOperationSchema,
  postJson,
  toItems,
  type JsonObject,
} from "./schema";

export { getApiBaseUrl, setApiBaseUrl, ApiError, TEACHER_MESSAGES } from "./schema";

export const LESSON_GENERATE_PATH = "/api/lesson/generate";

export type SubjectId = "math" | "language" | "evs";

export const SUBJECT_DISPLAY: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export type LessonRequest = {
  classLevel: number;
  subject: SubjectId;
  topic: string;
};

export type LessonContent = {
  topic: string;
  classLevel: number;
  subject: string;
  learningObjective: string[];
  simpleExplanation: string[];
  classroomActivity: string[];
  practiceQuestions: string[];
  shortAssessment: string[];
};

const ALIASES = {
  learningObjective: [
    "learning_objective",
    "learningobjective",
    "learning_objectives",
    "objectives",
    "objective",
    "learning_goal",
    "goal",
  ],
  simpleExplanation: [
    "simple_explanation",
    "simpleexplanation",
    "explanation",
    "content",
    "lesson_content",
    "body",
    "description",
    "concept",
  ],
  classroomActivity: [
    "classroom_activity",
    "classroomactivity",
    "activity",
    "activities",
    "class_activity",
  ],
  practiceQuestions: [
    "practice_questions",
    "practicequestions",
    "questions",
    "practice",
    "exercises",
  ],
  shortAssessment: [
    "short_assessment",
    "shortassessment",
    "assessment",
    "evaluation",
    "exit_ticket",
  ],
} as const;

export function normalizeLesson(
  payload: unknown,
  request: LessonRequest,
): LessonContent | null {
  if (payload == null) return null;
  if (typeof payload === "string") {
    const items = toItems(payload);
    return items.length
      ? {
          topic: request.topic,
          classLevel: request.classLevel,
          subject: SUBJECT_DISPLAY[request.subject],
          learningObjective: [],
          simpleExplanation: items,
          classroomActivity: [],
          practiceQuestions: [],
          shortAssessment: [],
        }
      : null;
  }

  const flat = new Map<string, unknown>();
  flatten(payload, flat);

  const topicRaw = flat.get("topic") ?? flat.get("title") ?? flat.get("lesson_topic");
  const classRaw = flat.get("class_level") ?? flat.get("classlevel");
  const parsedClass = Number.parseInt(String(classRaw ?? "").replace(/\D/g, ""), 10);

  const lesson: LessonContent = {
    topic: String(topicRaw ?? request.topic).trim(),
    classLevel: Number.isFinite(parsedClass)
      ? Math.min(5, Math.max(1, parsedClass))
      : request.classLevel,
    subject: String(flat.get("subject") ?? SUBJECT_DISPLAY[request.subject]),
    learningObjective: lookupAliases(flat, ALIASES.learningObjective),
    simpleExplanation: lookupAliases(flat, ALIASES.simpleExplanation),
    classroomActivity: lookupAliases(flat, ALIASES.classroomActivity),
    practiceQuestions: lookupAliases(flat, ALIASES.practiceQuestions),
    shortAssessment: lookupAliases(flat, ALIASES.shortAssessment),
  };

  const total =
    lesson.learningObjective.length +
    lesson.simpleExplanation.length +
    lesson.classroomActivity.length +
    lesson.practiceQuestions.length +
    lesson.shortAssessment.length;

  return total > 0 ? lesson : null;
}

export async function generateLesson(
  request: LessonRequest,
  signal?: AbortSignal,
): Promise<LessonContent> {
  const schema = await loadOperationSchema(LESSON_GENERATE_PATH);
  const payload: JsonObject = buildCorePayload(
    {
      classLevel: request.classLevel,
      subject: SUBJECT_DISPLAY[request.subject],
      topic: request.topic,
    },
    schema,
  );

  const raw = await postJson(LESSON_GENERATE_PATH, payload, signal);
  const lesson = normalizeLesson(raw, request);

  if (!lesson) {
    throw new ApiError(
      "unexpected-response",
      200,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
  return lesson;
}

```

---

## FILE: `src/services/flashcard.ts`

```typescript
/**
 * Bhasha Setu — Flashcard Generator service.
 *
 * Endpoint: POST {base}/api/flashcard/generate
 *
 * The request body is built from the LIVE /openapi.json schema, so whatever
 * the backend actually declares drives the payload. When the probe is
 * unreachable we fall back to the documented prototype shape:
 *
 *   {
 *     "topic": "Addition",
 *     "class_level": "Class 2",
 *     "subject": "Mathematics",
 *     "educational_context": "Primary-school FLN classroom",
 *     "num_cards": 10
 *   }
 *
 * A card-count field is only sent when the schema declares a matching
 * property (or when we have no schema) — we never push unknown fields.
 *
 * No content is invented. If the response cannot be mapped to flashcards we
 * return null and the UI shows a friendly error, never raw JSON.
 */

import {
  ApiError,
  TEACHER_MESSAGES,
  buildCorePayload,
  lookupArray,
  lookupString,
  loadOperationSchema,
  postJson,
  type ExtraField,
  type JsonObject,
  type OperationSchema,
} from "./schema";

export const FLASHCARD_GENERATE_PATH = "/api/flashcard/generate";

export type SubjectId = "math" | "language" | "evs";

export const SUBJECT_DISPLAY: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export type FlashcardRequest = {
  classLevel: number;
  subject: SubjectId;
  topic: string;
  /** requested only; the backend decides what it actually returns */
  cardCount: number;
};

export type Flashcard = {
  front: string;
  back: string;
  /** extra fields the backend may return (e.g. romanisation) */
  note: string;
};

export type FlashcardSet = {
  title: string;
  classLevel: number;
  subject: string;
  topic: string;
  cards: Flashcard[];
};

/* ── request ────────────────────────────────────────────────────────────── */

export const CARD_COUNT_CANDIDATES = [
  "num_cards",
  "numcards",
  "number_of_cards",
  "card_count",
  "cardcount",
  "no_of_cards",
  "n_cards",
  "count",
  "limit",
];

export function buildFlashcardPayload(
  request: FlashcardRequest,
  schema: OperationSchema | null,
): JsonObject {
  const extras: ExtraField[] = [
    {
      candidates: CARD_COUNT_CANDIDATES,
      value: request.cardCount,
      fallbackKey: "num_cards",
    },
  ];
  return buildCorePayload(
    {
      classLevel: request.classLevel,
      subject: SUBJECT_DISPLAY[request.subject],
      topic: request.topic,
    },
    schema,
    extras,
  );
}

/* ── response normalization ─────────────────────────────────────────────── */

const CARDS_KEYS = [
  "flashcards",
  "flash_cards",
  "flashcards_set",
  "cards",
  "items",
  "deck",
];

const FRONT_KEYS = [
  "front",
  "question",
  "term",
  "word",
  "prompt",
  "concept",
  "hindi",
  "text",
  "q",
];

const BACK_KEYS = [
  "back",
  "answer",
  "definition",
  "meaning",
  "explanation",
  "response",
  "santhali",
  "translation",
  "a",
];

const NOTE_KEYS = ["roman", "romanisation", "hint", "example", "pronunciation", "note"];

function pickField(obj: JsonObject, keys: string[], avoid?: string): string {
  for (const key of keys) {
    for (const [k, v] of Object.entries(obj)) {
      if (k.toLowerCase() !== key) continue;
      if (typeof v === "string" && v.trim()) return v.trim();
      if (typeof v === "number") return String(v);
    }
  }
  for (const key of keys) {
    for (const [k, v] of Object.entries(obj)) {
      if (!k.toLowerCase().includes(key)) continue;
      if (typeof v === "string" && v.trim() && v.trim() !== avoid) return v.trim();
      if (typeof v === "number") return String(v);
    }
  }
  return "";
}

/** "Q | A", "Q — A", "Q: A" → front/back; otherwise front only. */
function splitStringCard(raw: string): Flashcard {
  const text = raw.trim();
  const match =
    text.match(/^(.*?)\s*[|｜]\s*(.+)$/) ??
    text.match(/^(.*?)\s+[—–]\s+(.+)$/s) ??
    text.match(/^(.*?)\s*:\s*(.+)$/s);
  if (match && match[1].trim() && match[2].trim()) {
    return { front: match[1].trim(), back: match[2].trim(), note: "" };
  }
  return { front: text, back: "", note: "" };
}

export function normalizeFlashcards(
  payload: unknown,
  request: FlashcardRequest,
): FlashcardSet | null {
  if (payload == null) return null;

  let root: unknown = payload;
  if (typeof root === "string") {
    const lines = root
      .split(/\r?\n+/)
      .map((l) => l.trim())
      .filter(Boolean);
    const cards = lines.map(splitStringCard);
    if (!cards.length) return null;
    return {
      title: request.topic,
      classLevel: request.classLevel,
      subject: SUBJECT_DISPLAY[request.subject],
      topic: request.topic,
      cards,
    };
  }

  const obj = (typeof root === "object" && !Array.isArray(root) ? root : {}) as JsonObject;
  let rawCards = lookupArray(obj, CARDS_KEYS);

  // an array at the very top level is also acceptable
  if (!rawCards && Array.isArray(payload)) rawCards = payload as unknown[];
  if (!rawCards) return null;

  const cards: Flashcard[] = [];
  rawCards.forEach((entry) => {
    if (entry == null) return;
    if (typeof entry === "string") {
      const card = splitStringCard(entry);
      if (card.front) cards.push(card);
      return;
    }
    if (typeof entry !== "object" || Array.isArray(entry)) return;

    const e = entry as JsonObject;
    const front = pickField(e, FRONT_KEYS);
    if (!front) return;

    // avoid reusing the same value for both faces
    const backCandidate = pickField(e, BACK_KEYS, front);
    const back = backCandidate && backCandidate !== front ? backCandidate : "";
    const note = pickField(e, NOTE_KEYS, front);

    cards.push({ front, back, note: note && note !== back ? note : "" });
  });

  if (!cards.length) return null;

  const classRaw = lookupString(obj, ["class_level", "classlevel", "class", "grade"]);
  const parsedClass = Number.parseInt(String(classRaw ?? "").replace(/\D/g, ""), 10);

  return {
    title:
      lookupString(obj, [
        "flashcard_title",
        "flashcardtitle",
        "deck_title",
        "title",
        "name",
        "set_title",
      ]) ?? request.topic,
    classLevel: Number.isFinite(parsedClass)
      ? Math.min(5, Math.max(1, parsedClass))
      : request.classLevel,
    subject: lookupString(obj, ["subject"]) ?? SUBJECT_DISPLAY[request.subject],
    topic: lookupString(obj, ["topic"]) ?? request.topic,
    cards,
  };
}

/* ── the call ───────────────────────────────────────────────────────────── */

export async function generateFlashcards(
  request: FlashcardRequest,
  signal?: AbortSignal,
): Promise<FlashcardSet> {
  const schema = await loadOperationSchema(FLASHCARD_GENERATE_PATH);
  const payload = buildFlashcardPayload(request, schema);
  const raw = await postJson(FLASHCARD_GENERATE_PATH, payload, signal);
  const set = normalizeFlashcards(raw, request);

  if (!set) {
    throw new ApiError(
      "unexpected-response",
      200,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
  return set;
}

/** Plain-text rendering of real cards (copy / download). */
export function flashcardsToPlainText(set: FlashcardSet): string {
  const lines: string[] = [
    "भाषा सेतु — फ़्लैशकार्ड",
    set.title,
    `कक्षा ${set.classLevel} · ${set.subject}`,
    "",
  ];
  set.cards.forEach((card, i) => {
    lines.push(`${i + 1}. ${card.front}`);
    if (card.back) lines.push(`   → ${card.back}`);
    if (card.note) lines.push(`   (${card.note})`);
    lines.push("");
  });
  return lines.join("\n");
}

```

---

## FILE: `src/services/schema.ts`

```typescript
/**
 * Bhasha Setu — shared API core.
 *
 * Configuration, error taxonomy, OpenAPI schema discovery, request shaping
 * and response helpers used by every generator service
 * (lesson, worksheet, …). Individual services live next to this file and
 * must not call fetch() themselves.
 *
 * ── Security ────────────────────────────────────────────────────────────
 * The browser talks ONLY to FastAPI. It never contacts an LLM provider and
 * never holds, sends or logs GEMINI_API_KEY. That key is server-side only.
 * No auth headers, no credentials, no secrets in this module.
 *
 * ── Schema handling ─────────────────────────────────────────────────────
 * {base}/openapi.json (i.e. /docs) is the source of truth. We probe each
 * endpoint once, resolve $ref / allOf, and build the request body from the
 * REAL schema: property names, types, enums and required flags. When the
 * probe cannot be reached we fall back to the documented prototype shape.
 */

/* ── configuration ──────────────────────────────────────────────────────── */

export const DEFAULT_API_BASE_URL = "http://127.0.0.1:8000";
export const EDUCATIONAL_CONTEXT = "Primary-school FLN classroom";

const LS_BASE_KEY = "bhasha-setu:api-base-url";

/** VITE_API_BASE_URL is the primary knob; localStorage is a dev override. */
export function getApiBaseUrl(): string {
  let base = DEFAULT_API_BASE_URL;
  const env = (import.meta.env?.VITE_API_BASE_URL as string | undefined) ?? "";
  if (env.trim()) base = env.trim();
  try {
    const stored = window.localStorage.getItem(LS_BASE_KEY);
    if (stored && stored.trim()) base = stored.trim();
  } catch {
    /* storage unavailable */
  }
  return base.replace(/\/+$/, "");
}

export function setApiBaseUrl(url: string): void {
  try {
    if (url.trim()) window.localStorage.setItem(LS_BASE_KEY, url.trim());
    else window.localStorage.removeItem(LS_BASE_KEY);
  } catch {
    /* ignore */
  }
}

/* ── errors ─────────────────────────────────────────────────────────────── */

export type ApiErrorKind =
  | "network"
  | "invalid-request"
  | "server"
  | "unexpected-response"
  | "timeout"
  | "unknown";

export class ApiError extends Error {
  kind: ApiErrorKind;
  status: number;

  constructor(kind: ApiErrorKind, status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.kind = kind;
    this.status = status;
  }
}

/** Teacher-facing copy. Safe to render; never contains API internals. */
export const TEACHER_MESSAGES = {
  network:
    "Sorry, we couldn't reach the service right now. Please check your connection and try again.",
  timeout:
    "The service is taking too long to respond. Please try again in a moment.",
  server: "Sorry, we couldn't complete this right now. Please try again.",
  invalidRequest:
    "Some details couldn't be accepted. Please check them and try again.",
  unexpectedResponse: "Sorry, we couldn't complete this right now. Please try again.",
  unknown: "Sorry, we couldn't complete this right now. Please try again.",
} as const;

export const TIMEOUT_MS = 60_000;

/* ── OpenAPI discovery ──────────────────────────────────────────────────── */

export type JsonObject = Record<string, unknown>;

export type SchemaProp = {
  type?: string;
  enum?: unknown[];
  default?: unknown;
};

export type OperationSchema = {
  props: Record<string, SchemaProp>;
  required: string[];
};

const schemaCache = new Map<string, OperationSchema | null>();

function resolveRef(root: JsonObject, node: unknown, depth = 0): unknown {
  if (!node || typeof node !== "object" || depth > 6) return node;
  const obj = node as JsonObject;
  const ref = obj.$ref;
  if (typeof ref === "string" && ref.startsWith("#/")) {
    const target = ref
      .slice(2)
      .split("/")
      .reduce<unknown>((acc, key) => {
        if (acc && typeof acc === "object") return (acc as JsonObject)[key];
        return undefined;
      }, root);
    return resolveRef(root, target, depth + 1);
  }
  return obj;
}

/** Extract the request-body schema for a given path, e.g. /api/worksheet/generate. */
export function parseOperationSchema(
  doc: JsonObject,
  path: string,
): OperationSchema | null {
  const paths = (doc.paths ?? {}) as JsonObject;
  const keys = Object.keys(paths);
  const suffix = path.replace(/^\/+/, ""); // "api/worksheet/generate"
  const pathKey =
    keys.find((k) => k === path) ??
    keys.find((k) => k.replace(/^\/+|\/+$/g, "").endsWith(suffix));
  if (!pathKey) return null;

  const pathItem = resolveRef(doc, paths[pathKey]) as JsonObject | undefined;
  if (!pathItem) return null;

  const op = (pathItem.post ?? pathItem.put ?? pathItem.get) as JsonObject | undefined;
  if (!op) return null;

  const body = resolveRef(doc, op.requestBody) as JsonObject | undefined;
  const content = body?.content as JsonObject | undefined;
  const jsonEntry = content?.["application/json"] as JsonObject | undefined;
  const schema = resolveRef(doc, jsonEntry?.schema ?? body?.schema) as
    | JsonObject
    | undefined;
  if (!schema) return null;

  let merged: JsonObject = schema;
  if (Array.isArray(schema.allOf)) {
    merged = schema.allOf.reduce<JsonObject>((acc, entry) => {
      const part = resolveRef(doc, entry);
      if (part && typeof part === "object") return { ...acc, ...(part as JsonObject) };
      return acc;
    }, { properties: {}, required: [] } as JsonObject);
  }

  const propsRaw = (merged.properties ?? {}) as JsonObject;
  const props: Record<string, SchemaProp> = {};
  Object.entries(propsRaw).forEach(([name, value]) => {
    const resolved = resolveRef(doc, value) as JsonObject | undefined;
    if (resolved && typeof resolved === "object") {
      props[name] = {
        type: typeof resolved.type === "string" ? resolved.type : undefined,
        enum: Array.isArray(resolved.enum) ? resolved.enum : undefined,
        default: resolved.default,
      };
    }
  });

  const required = Array.isArray(merged.required)
    ? merged.required.filter((r): r is string => typeof r === "string")
    : [];

  return { props, required };
}

/** One probe per endpoint per page load; silent failure is expected. */
export async function loadOperationSchema(
  path: string,
): Promise<OperationSchema | null> {
  if (schemaCache.has(path)) return schemaCache.get(path) ?? null;
  let parsed: OperationSchema | null = null;
  try {
    const res = await fetch(`${getApiBaseUrl()}/openapi.json`, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout?.(5000) ?? undefined,
    });
    if (!res.ok) throw new Error("bad status");
    parsed = parseOperationSchema((await res.json()) as JsonObject, path);
  } catch {
    parsed = null; // offline / CORS blocked → documented fallback
  }
  schemaCache.set(path, parsed);
  return parsed;
}

/* ── request shaping ────────────────────────────────────────────────────── */

export function matchKey(
  candidates: string[],
  props: Record<string, SchemaProp>,
): string | null {
  const keys = Object.keys(props);
  for (const candidate of candidates) {
    const hit = keys.find((k) => k.toLowerCase() === candidate.toLowerCase());
    if (hit) return hit;
  }
  for (const candidate of candidates) {
    const hit = keys.find((k) => k.toLowerCase().includes(candidate.toLowerCase()));
    if (hit) return hit;
  }
  return null;
}

export function coerce(
  value: string | number,
  prop: SchemaProp | undefined,
  enumPreference?: string[],
): string | number {
  if (prop?.enum?.length) {
    const values = prop.enum.map((v) => String(v));
    for (const pref of enumPreference ?? []) {
      const hit = values.find((v) => v.toLowerCase() === pref.toLowerCase());
      if (hit) return hit;
    }
    const loose = values.find((v) =>
      String(value).toLowerCase().includes(v.toLowerCase()),
    );
    if (loose) return loose;
    const numeric = values.find((v) => v.replace(/\D/g, "") === String(value));
    if (numeric) return numeric;
    return values[0];
  }
  if (prop?.type === "integer" || prop?.type === "number") {
    const n = Number(String(value).replace(/\D/g, ""));
    return Number.isFinite(n) ? n : value;
  }
  if (prop?.type === "string" && typeof value !== "string") {
    const preferred = (enumPreference ?? []).find((p) => typeof p === "string");
    return preferred ?? String(value);
  }
  return value;
}

export type ExtraField = {
  /** candidate property names, best first */
  candidates: string[];
  value: string | number;
  /** used verbatim when the schema could not be read */
  fallbackKey: string;
};

/**
 * Build {topic, class, subject, educational_context} from the real schema,
 * plus optional extras. Extras are only sent when the schema declares a
 * matching property (or when we have no schema at all) — we never push
 * unknown fields at a strict backend.
 */
export function buildCorePayload(
  request: { classLevel: number; subject: string; topic: string },
  schema: OperationSchema | null,
  extras: ExtraField[] = [],
): JsonObject {
  const className = `Class ${request.classLevel}`;

  if (!schema || Object.keys(schema.props).length === 0) {
    const payload: JsonObject = {
      topic: request.topic.trim(),
      class_level: className,
      subject: request.subject,
      educational_context: EDUCATIONAL_CONTEXT,
    };
    extras.forEach((extra) => {
      payload[extra.fallbackKey] = extra.value;
    });
    return payload;
  }

  const payload: JsonObject = {};
  const { props, required } = schema;

  const topicKey = matchKey(["topic", "lesson_topic", "title", "subject_topic"], props);
  const classKey = matchKey(
    ["class_level", "classlevel", "class", "grade", "standard"],
    props,
  );
  const subjectKey = matchKey(["subject", "subject_name"], props);
  const contextKey = matchKey(
    ["educational_context", "educationalcontext", "context", "teaching_context"],
    props,
  );

  if (topicKey) payload[topicKey] = coerce(request.topic.trim(), props[topicKey]);
  if (classKey) {
    payload[classKey] = coerce(request.classLevel, props[classKey], [
      className,
      String(request.classLevel),
    ]);
  }
  if (subjectKey) {
    payload[subjectKey] = coerce(request.subject, props[subjectKey], [request.subject]);
  }
  if (contextKey) {
    payload[contextKey] = coerce(EDUCATIONAL_CONTEXT, props[contextKey], [
      EDUCATIONAL_CONTEXT,
    ]);
  }

  extras.forEach((extra) => {
    const key = matchKey(extra.candidates, props);
    if (key) payload[key] = coerce(extra.value, props[key]);
  });

  // Satisfy remaining required properties using only the backend's own
  // declared defaults or vocabulary. Anything unknowable is left out on
  // purpose — a clear 422 beats silently generating from a guessed field.
  required.forEach((name) => {
    if (payload[name] !== undefined) return;
    const prop = props[name];
    if (prop?.default !== undefined) payload[name] = prop.default as string | number;
    else if (prop?.enum?.length) payload[name] = prop.enum[0] as string | number;
  });

  return payload;
}

/* ── transport ──────────────────────────────────────────────────────────── */

/**
 * POST JSON, returning parsed body (object, array or string).
 * Throws ApiError with teacher-safe messages only; the error body from the
 * server is deliberately discarded so it can never reach the UI.
 */
export async function postJson(
  path: string,
  body: JsonObject,
  signal?: AbortSignal,
): Promise<unknown> {
  const url = `${getApiBaseUrl()}${path}`;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
  const onAbort = () => controller.abort();
  signal?.addEventListener("abort", onAbort, { once: true });

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch {
    const timedOut = controller.signal.aborted && !signal?.aborted;
    if (signal?.aborted) throw new ApiError("network", 499, "cancelled");
    throw new ApiError(
      timedOut ? "timeout" : "network",
      0,
      timedOut ? TEACHER_MESSAGES.timeout : TEACHER_MESSAGES.network,
    );
  } finally {
    window.clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
  }

  if (!response.ok) {
    try {
      await response.text(); // drain & discard — never shown to the teacher
    } catch {
      /* ignore */
    }
    if (response.status === 400 || response.status === 422) {
      throw new ApiError("invalid-request", response.status, TEACHER_MESSAGES.invalidRequest);
    }
    throw new ApiError("server", response.status, TEACHER_MESSAGES.server);
  }

  try {
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      return text; // a plain-text body is acceptable
    }
  } catch {
    throw new ApiError(
      "unexpected-response",
      response.status,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
}

/* ── response helpers ───────────────────────────────────────────────────── */

/** Turn "1.\ntext", "• text", "a) text" or prose into clean list items. */
export function toItems(value: unknown): string[] {
  if (value == null) return [];
  const raw: string[] = Array.isArray(value)
    ? value.map((v) => (typeof v === "object" ? JSON.stringify(v) : String(v)))
    : [typeof value === "object" ? JSON.stringify(value) : String(value)];

  const text = raw.join("\n").trim();
  if (!text) return [];

  return text
    .split(/\r?\n+/)
    .flatMap((line: string) => {
      const l = line.trim();
      if (!l) return [];
      if (/\d+\.\s/.test(l) && l.split(/\d+\.\s/).length > 2) {
        return l
          .split(/(?=\d+\.\s)/)
          .map((p) => p.replace(/^\d+\.\s*/, "").trim())
          .filter(Boolean);
      }
      return [l];
    })
    .map((l) => l.replace(/^[-•*·–—]+\s*/, "").replace(/^\d+[.)]\s*/, "").trim())
    .filter(Boolean);
}

/** Flatten nested objects to {lowerLeafKey: value} for tolerant lookup. */
export function flatten(obj: unknown, out: Map<string, unknown>, depth = 0): void {
  if (!obj || typeof obj !== "object" || depth > 5) return;
  if (Array.isArray(obj)) return;
  Object.entries(obj as JsonObject).forEach(([key, value]) => {
    const k = key.toLowerCase();
    if (value == null) return;
    if (typeof value === "object" && !Array.isArray(value)) {
      flatten(value, out, depth + 1);
    } else if (!out.has(k)) {
      out.set(k, value);
    }
  });
}

export function lookupAliases(
  flat: Map<string, unknown>,
  aliases: readonly string[],
): string[] {
  for (const alias of aliases) {
    const direct = flat.get(alias);
    if (direct != null) {
      const items = toItems(direct);
      if (items.length) return items;
    }
  }
  for (const alias of aliases) {
    for (const [key, value] of flat) {
      if (key.includes(alias) && value != null) {
        const items = toItems(value);
        if (items.length) return items;
      }
    }
  }
  return [];
}

/** First array found under any of the given keys (searches nested objects). */
export function lookupArray(
  node: unknown,
  candidates: readonly string[],
  depth = 0,
): unknown[] | null {
  if (!node || typeof node !== "object" || depth > 5) return null;
  if (Array.isArray(node)) return null;
  const obj = node as JsonObject;
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase() === candidate && Array.isArray(value)) return value;
    }
  }
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase().includes(candidate) && Array.isArray(value)) return value;
    }
  }
  for (const value of Object.values(obj)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nested = lookupArray(value, candidates, depth + 1);
      if (nested) return nested;
    }
  }
  return null;
}

/** First string found under any of the given keys (searches nested objects). */
export function lookupString(
  node: unknown,
  candidates: readonly string[],
  depth = 0,
): string | null {
  if (!node || typeof node !== "object" || depth > 5) return null;
  if (Array.isArray(node)) return null;
  const obj = node as JsonObject;
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase() === candidate) {
        if (typeof value === "string" && value.trim()) return value.trim();
        if (typeof value === "number") return String(value);
      }
    }
  }
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase().includes(candidate)) {
        if (typeof value === "string" && value.trim()) return value.trim();
        if (typeof value === "number") return String(value);
      }
    }
  }
  for (const value of Object.values(obj)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nested = lookupString(value, candidates, depth + 1);
      if (nested) return nested;
    }
  }
  return null;
}

```

---

## FILE: `src/services/worksheet.ts`

```typescript
/**
 * Bhasha Setu — Worksheet Generator service.
 *
 * Endpoint: POST {base}/api/worksheet/generate
 *
 * The request body is built from the LIVE /openapi.json schema, so whatever
 * the backend actually declares (property names, types, enums, required
 * flags) drives the payload. When the probe is unreachable we fall back to
 * the documented prototype shape:
 *
 *   {
 *     "topic": "Addition",
 *     "class_level": "Class 2",
 *     "subject": "Mathematics",
 *     "educational_context": "Primary-school FLN classroom",
 *     "num_questions": 10
 *   }
 *
 * Extra fields such as a question count are only sent when the schema
 * declares a matching property (or when we have no schema) — we never push
 * unknown fields at a strict backend.
 *
 * No content is invented. If the response cannot be mapped to a worksheet
 * we return null and the UI shows a friendly error, never raw JSON.
 */

import {
  ApiError,
  TEACHER_MESSAGES,
  buildCorePayload,
  coerce,
  lookupArray,
  lookupString,
  loadOperationSchema,
  matchKey,
  postJson,
  toItems,
  type ExtraField,
  type JsonObject,
  type OperationSchema,
} from "./schema";

export const WORKSHEET_GENERATE_PATH = "/api/worksheet/generate";

export type SubjectId = "math" | "language" | "evs";

export const SUBJECT_DISPLAY: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export type WorksheetRequest = {
  classLevel: number;
  subject: SubjectId;
  topic: string;
  /** requested only; the backend decides what it actually returns */
  questionCount: number;
};

export type WorksheetQuestion = {
  text: string;
  type: string;
  options: string[];
  answer: string;
};

export type WorksheetSection = {
  heading: string;
  questions: WorksheetQuestion[];
};

export type Worksheet = {
  title: string;
  instructions: string;
  classLevel: number;
  subject: string;
  topic: string;
  questions: WorksheetQuestion[];
  sections: WorksheetSection[];
  answerKey: { question: string; answer: string }[];
};

/* ── request ────────────────────────────────────────────────────────────── */

export const QUESTION_COUNT_CANDIDATES = [
  "num_questions",
  "numquestions",
  "number_of_questions",
  "question_count",
  "questioncount",
  "no_of_questions",
  "n_questions",
  "count",
];

export function buildWorksheetPayload(
  request: WorksheetRequest,
  schema: OperationSchema | null,
): JsonObject {
  const extras: ExtraField[] = [
    {
      candidates: QUESTION_COUNT_CANDIDATES,
      value: request.questionCount,
      fallbackKey: "num_questions",
    },
  ];
  return buildCorePayload(
    {
      classLevel: request.classLevel,
      subject: SUBJECT_DISPLAY[request.subject],
      topic: request.topic,
    },
    schema,
    extras,
  );
}

/* ── response normalization ─────────────────────────────────────────────── */

const QUESTION_TEXT_KEYS = [
  "question",
  "question_text",
  "questiontext",
  "text",
  "prompt",
  "q",
];
const ANSWER_KEYS = ["answer", "correct_answer", "correctanswer", "solution", "ans"];
const OPTIONS_KEYS = ["options", "choices", "alternatives", "answers"];
const TYPE_KEYS = ["type", "question_type", "questiontype", "qtype"];

function normalizeOptions(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((v) => {
        if (v == null) return "";
        if (typeof v === "string") return v.trim();
        if (typeof v === "object") {
          const obj = v as JsonObject;
          const text =
            typeof obj.text === "string"
              ? obj.text
              : typeof obj.option === "string"
                ? obj.option
                : typeof obj.label === "string"
                  ? obj.label
                  : "";
          return text.trim();
        }
        return String(v).trim();
      })
      .filter(Boolean);
  }
  return [];
}

function normalizeQuestion(value: unknown): WorksheetQuestion | null {
  if (value == null) return null;

  if (typeof value === "string") {
    const text = value.trim();
    return text ? { text, type: "", options: [], answer: "" } : null;
  }
  if (typeof value !== "object" || Array.isArray(value)) return null;

  const obj = value as JsonObject;
  const text = lookupString(obj, QUESTION_TEXT_KEYS);
  if (!text) return null;

  const options = (() => {
    for (const key of OPTIONS_KEYS) {
      const direct = obj[key];
      if (Array.isArray(direct)) return normalizeOptions(direct);
      for (const [k, v] of Object.entries(obj)) {
        if (k.toLowerCase() === key && Array.isArray(v)) return normalizeOptions(v);
      }
    }
    for (const [k, v] of Object.entries(obj)) {
      if (k.toLowerCase().includes("option") && Array.isArray(v)) {
        return normalizeOptions(v);
      }
    }
    return [];
  })();

  const answer = lookupString(obj, ANSWER_KEYS) ?? "";
  const type = lookupString(obj, TYPE_KEYS) ?? "";

  return { text, type, options, answer };
}

const QUESTIONS_KEYS = [
  "questions",
  "worksheet_questions",
  "worksheetquestions",
  "question_list",
  "items",
  "question_bank",
  "questionbank",
];

const SECTION_KEYS = ["sections", "parts", "groups", "blocks"];

export function normalizeWorksheet(
  payload: unknown,
  request: WorksheetRequest,
): Worksheet | null {
  if (payload == null) return null;

  const root: unknown = payload;
  const obj = typeof root === "object" && !Array.isArray(root) ? (root as JsonObject) : {};

  // ── sections ───────────────────────────────────────────────────────────
  const sections: WorksheetSection[] = [];
  const rawSections = lookupArray(obj, SECTION_KEYS);
  if (rawSections) {
    rawSections.forEach((section) => {
      if (!section || typeof section !== "object" || Array.isArray(section)) return;
      const sObj = section as JsonObject;
      const heading =
        lookupString(sObj, ["heading", "title", "name", "section", "section_title"]) ?? "";
      const inner = lookupArray(sObj, QUESTIONS_KEYS) ?? [];
      const questions = inner
        .map(normalizeQuestion)
        .filter((q): q is WorksheetQuestion => q !== null);
      if (questions.length) sections.push({ heading, questions });
    });
  }

  // ── top-level questions ────────────────────────────────────────────────
  const rawQuestions = lookupArray(obj, QUESTIONS_KEYS) ?? [];
  const questions = rawQuestions
    .map(normalizeQuestion)
    .filter((q): q is WorksheetQuestion => q !== null);

  // ── answer key ─────────────────────────────────────────────────────────
  const answerKey: { question: string; answer: string }[] = [];
  const rawAnswers = lookupArray(obj, ["answer_key", "answerkey", "answers", "solutions"]);
  if (rawAnswers) {
    rawAnswers.forEach((entry) => {
      if (entry == null) return;
      if (typeof entry === "string") {
        answerKey.push({ question: "", answer: entry.trim() });
        return;
      }
      if (typeof entry === "object" && !Array.isArray(entry)) {
        const e = entry as JsonObject;
        const q = lookupString(e, QUESTION_TEXT_KEYS) ?? "";
        const a = lookupString(e, ANSWER_KEYS) ?? "";
        if (q || a) answerKey.push({ question: q, answer: a });
      }
    });
  }

  const totalQuestions =
    questions.length + sections.reduce((sum, s) => sum + s.questions.length, 0);

  // Nothing mappable → caller shows a friendly error, never raw JSON.
  if (totalQuestions === 0 && answerKey.length === 0) return null;

  const classRaw = lookupString(obj, ["class_level", "classlevel", "class", "grade"]);
  const parsedClass = Number.parseInt(String(classRaw ?? "").replace(/\D/g, ""), 10);

  const title =
    lookupString(obj, ["worksheet_title", "worksheettitle", "title", "name", "heading"]) ??
    request.topic;

  return {
    title,
    instructions:
      lookupString(obj, ["instructions", "note", "guidelines", "direction", "directions"]) ??
      "",
    classLevel: Number.isFinite(parsedClass)
      ? Math.min(5, Math.max(1, parsedClass))
      : request.classLevel,
    subject: lookupString(obj, ["subject"]) ?? SUBJECT_DISPLAY[request.subject],
    topic: lookupString(obj, ["topic"]) ?? request.topic,
    questions,
    sections,
    answerKey,
  };
}

/* ── the call ───────────────────────────────────────────────────────────── */

export async function generateWorksheet(
  request: WorksheetRequest,
  signal?: AbortSignal,
): Promise<Worksheet> {
  const schema = await loadOperationSchema(WORKSHEET_GENERATE_PATH);
  const payload = buildWorksheetPayload(request, schema);
  const raw = await postJson(WORKSHEET_GENERATE_PATH, payload, signal);
  const worksheet = normalizeWorksheet(raw, request);

  if (!worksheet) {
    throw new ApiError(
      "unexpected-response",
      200,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
  return worksheet;
}

/** Plain-text rendering of a real worksheet (used by copy/download/print). */
export function worksheetToPlainText(worksheet: Worksheet): string {
  const lines: string[] = [
    "भाषा सेतु — कार्यपत्रिका",
    worksheet.title,
    `कक्षा ${worksheet.classLevel} · ${worksheet.subject}`,
    "",
  ];

  if (worksheet.instructions) {
    lines.push(`निर्देश: ${worksheet.instructions}`, "");
  }

  let n = 0;
  worksheet.questions.forEach((q) => {
    n += 1;
    lines.push(`${n}. ${q.text}`);
    q.options.forEach((opt, i) =>
      lines.push(`   ${String.fromCharCode(65 + i)}. ${opt}`),
    );
    lines.push("");
  });

  worksheet.sections.forEach((section) => {
    if (section.heading) lines.push(`— ${section.heading} —`);
    section.questions.forEach((q) => {
      n += 1;
      lines.push(`${n}. ${q.text}`);
      q.options.forEach((opt, i) =>
        lines.push(`   ${String.fromCharCode(65 + i)}. ${opt}`),
      );
      lines.push("");
    });
    lines.push("");
  });

  const key = worksheet.answerKey.length
    ? worksheet.answerKey
    : [
        ...worksheet.questions,
        ...worksheet.sections.flatMap((s) => s.questions),
      ].map((q) => ({ question: q.text, answer: q.answer }));

  const usableKey = key.filter((k) => k.answer);
  if (usableKey.length) {
    lines.push("उत्तरमाला (शिक्षक के लिए)");
    usableKey.forEach((k, i) => lines.push(`${i + 1}. ${k.answer}`));
  }

  return lines.join("\n");
}

/** Helper kept for symmetry with the lesson service. */
export const worksheetHelpers = { coerce, matchKey, toItems };

```

---

## FILE: `src/utils/cn.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

---

## FILE: `src/vite-env.d.ts`

```typescript
/// <reference types="vite/client" />

declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}

```

---

## FILE: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "types": ["node"],

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Path mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "vite.config.ts"]
}

```

---

## FILE: `vite.config.ts`

```typescript
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

```
