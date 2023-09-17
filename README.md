# GitHub Actions dotenv reader

Read variables from a `.env` file.

Marks all env variables as secret automatically.

## Usage

```yml
- uses: romeovs/dotenv
  id: env
  with:
    filename: .env
- run: echo ${{ steps.id.output.FOO }}
```
