export default function IndexPage({params: {locale}}: { params: { locale: string } }) {

    return <div>
        <h1>Hello world: {locale}</h1>
    </div>
};
