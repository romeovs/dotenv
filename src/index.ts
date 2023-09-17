import * as core from "@actions/core"
import * as dotenv from "dotenv"
import * as path from "path"
import { promises as fs } from "fs"

async function main() {
	const file = core.getInput("file") ?? ".env"

	const pathname = path.resolve(file)
	core.info(`Loading env from ${pathname}`)

	const content = await fs.readFile(pathname, "utf-8")
	const env = dotenv.parse(content)

	for (const key in env) {
		const value = env[key]
		core.setSecret(value)
		core.setOutput(key, value)
	}
}

main().catch(function (error) {
	core.setFailed(error.message)
})
