declare const npmView: (name: string, range?: string) => Promise<{ [key: string]: any } | null>
export default npmView
