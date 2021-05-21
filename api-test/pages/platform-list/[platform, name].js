import {useRouter} from 'next/router'
import { ProjectDependencies } from "../../components/projectDependencies"

export default function InfoPackagePage(props){

    const {homepage,description,language,repository_url} = props.packageInfo

    return <ProjectDependencies packageInfo={packageInfo} />
}






