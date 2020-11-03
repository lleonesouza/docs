import React, { Suspense } from "react"
import createResources from "./resources";
import SubIndex from "./component"
import Loading from "./component/utils/loading"

const resource = createResources();

const Index = () => {
  return (
      <Suspense fallback={<Loading />}>
        <SubIndex resource={resource} />
      </Suspense>
  );
}


export default Index
