import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import EditorTemplate from 'components/editor/EditorTemplate';

const EditorPage = () => {
  return (
    // <PageTemplate 
    //   children={<EditorTemplate 
    //     header='preview / editor / tree'
    //     preview='프리뷰ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
    //     editor={<EditorInnerTemplate
    //       editor='에디터sssssssssssssssssssssssssssssssssssssssssssssssssssssss11111111111111111sssss'
    //       tree='트리sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
    //     />}
    //   />}
    // />
    <PageTemplate
      children={<EditorTemplate
        header='preview / editor / tree'
        preview='프리뷰'
        editor='에디터'
        tree='트리'
      />}
    />
  )
}

export default EditorPage;