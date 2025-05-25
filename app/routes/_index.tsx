import { useLoaderData, type LoaderFunctionArgs } from 'react-router'

export function meta() {
  return [{ title: 'Home' }]
}

export function loader(args: LoaderFunctionArgs) {
  const { context } = args
  const { log, config } = context
  const output = { appName: config.appName }
  log.info(output, 'Home route loaded')
  return output
}

export default function Index() {
  const { appName } = useLoaderData<typeof loader>()
  return <p>Hello from the {appName} app.</p>
}
