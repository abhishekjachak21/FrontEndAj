import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {              //agar pehle se post hai yha pr
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {  //nayi file ka data upload kara yha pr
                ...data,
                featuredImage: file ? file.$id : undefined, //file h toh file ki nayi id dedo bhai
            });

            if (dbPost) {      //jha pr file upload hui h vha pr leke chalo
                navigate(`/post/${dbPost.$id}`);
            }
        } else {            //pehle se kuch bi nhi h, naya karna padega sab
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {                     //ab file upload kiyi toh data bhi karo
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id })  ;

                if (dbPost) {            //jha pr file bani h vha pr leke chalo
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {       //My Favourite Idol ko my-favourite-idol bananta hai yeh
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();  //"Okay, we're done watching now. Stop paying attention."
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}


/*

### What's Going On Here?

1. `React.useEffect(() => {...}, [watch, slugTransform, setValue])`:
   - This is like saying, "Hey React, do something special when certain things change."
   - We're telling React to pay attention to changes in `watch`, `slugTransform`, and `setValue`. 
   If any of these change, do the stuff inside the function.

2. `const subscription = watch((value, { name }) => {...})`:
   - This part is like saying, "Hey, watch out for any changes in the value of something."
   - We're setting up a "watcher" called `subscription`. It's like having someone keep an eye on something for us.
   - When there's a change, it runs a function that gives us the `value` and `name` of what changed.

3. `if (name === "title") {...}`:
   - Here, we're checking if the thing that changed is the `title`.
   - It's like saying, "If the thing that changed is the title, then do something."

4. `setValue("slug", slugTransform(value.title), { shouldValidate: true })`:
   - When the title changes, we want to update the slug (remember, the slug is like a nickname for a page).
   - We use `setValue` to update the value of the `slug` field.
   - We use `slugTransform` to make sure the slug is in the right format.
   - The `{ shouldValidate: true }` part is like saying, "Yep, make sure this new value is valid."

5. `return () => subscription.unsubscribe();`:
   - This is like saying, "Okay, we're done watching now. Stop paying attention."
   - It's cleaning up after ourselves, making sure we don't waste resources by watching forever.

### Why We Need This

Imagine you're typing a title for your blog post. As you type, we want to automatically 
create a slug (that easy-to-read part of the web address). This code is like having a little helper
 who watches what you type. When you finish typing the title, it quietly creates the slug 
 for you in the background. Neat, right?

### Example

Imagine you're writing a blog post and you type this into the title field:
```
Title: My Fun Day at the Park
```
The slug automatically becomes:
```
Slug: my-fun-day-at-the-park
```
All of this happens without you having to do anything extra. It's like magic! 
But really, it's just this little bit of code doing its job behind the scenes. Cool, huh?

*/