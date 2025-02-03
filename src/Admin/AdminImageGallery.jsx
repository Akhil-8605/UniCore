import { useState } from "react";
import { Upload, Pencil, Trash2 } from "lucide-react";
import "./AdminImageGallery.css";
import AdminPortalLayout from "./AdminPortalLayout";
import SampleImg from "../Images/campus-img-students.png"

const initialImages = [
    {
        id: 1,
        src: SampleImg,
        title: "Classroom Session",
        description: "Students attending a lecture in the main hall",
        alt: "Students in classroom",
    },
];

export default function GalleryAdminPage() {
    const [activeTab, setActiveTab] = useState("gallery");
    const [images, setImages] = useState(initialImages);
    const [editingImage, setEditingImage] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [preview, setPreview] = useState(null);

    const handleDelete = (id) => {
        setImages(images.filter((img) => img.id !== id));
    };

    const handleEdit = (image) => {
        setEditingImage(image);
        setIsDialogOpen(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (editingImage) {
            const updatedImage = {
                ...editingImage,
                title: formData.get("title"),
                description: formData.get("description"),
                alt: formData.get("alt"),
            };

            setImages(images.map((img) => (img.id === editingImage.id ? updatedImage : img)));
            setIsDialogOpen(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        setIsUploading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert("Image uploaded successfully!");
            e.currentTarget.reset();
            setPreview(null);
        } catch (error) {
            alert("Failed to upload image. Please try again.");
            console.log(error)
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <AdminPortalLayout />
            <div className="admin-image-container">
                <div className="admin-image-card">
                    <div className="admin-image-card-header">
                        <h1>Gallery Management</h1>
                    </div>

                    <div className="admin-image-tabs">
                        <button className={`admin-image-tab ${activeTab === "gallery" ? "active" : ""}`} onClick={() => setActiveTab("gallery")}>
                            Gallery Images
                        </button>
                        <button className={`admin-image-tab ${activeTab === "upload" ? "active" : ""}`} onClick={() => setActiveTab("upload")}>
                            Upload New Image
                        </button>
                    </div>

                    {activeTab === "gallery" && (
                        <div className="admin-image-gallery-grid">
                            {images.map((image) => (
                                <div key={image.id} className="admin-image-gallery-item">
                                    <div className="admin-image-image-container">
                                        <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                                        <div className="admin-image-image-overlay">
                                            <button className="admin-image-edit-button" onClick={() => handleEdit(image)}>
                                                <Pencil />
                                            </button>
                                            <button className="admin-image-delete-button" onClick={() => handleDelete(image.id)}>
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="admin-image-image-info">
                                        <h3>{image.title}</h3>
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "upload" && (
                        <form onSubmit={handleUpload} className="admin-image-upload-form">
                            <div className="admin-image-form-group">
                                <label htmlFor="image">Gallery Image</label>
                                <div className="admin-image-upload-container">
                                    <div className="admin-image-preview-container">
                                        {preview ? (
                                            <img src={preview || "/placeholder.svg"} alt="Preview" />
                                        ) : (
                                            <div className="admin-image-upload-placeholder">
                                                <Upload />
                                            </div>
                                        )}
                                    </div>
                                    <input id="image" type="file" accept="image/*" required onChange={handleImageChange} />
                                </div>
                            </div>

                            <div className="admin-image-form-group">
                                <label htmlFor="title">Image Title</label>
                                <input id="title" name="title" type="text" required placeholder="Enter a title for the image" />
                            </div>

                            <div className="admin-image-form-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description" required placeholder="Describe the image content" />
                            </div>

                            <div className="admin-image-form-group">
                                <label htmlFor="alt">Alt Text</label>
                                <input id="alt" name="alt" type="text" required placeholder="Provide alternative text for accessibility" />
                            </div>

                            <button type="submit" className="admin-image-submit-button" disabled={isUploading}>
                                {isUploading ? "Uploading..." : "Upload to Gallery"}
                            </button>
                        </form>
                    )}

                    {isDialogOpen && (
                        <div className="admin-image-modal-overlay">
                            <div className="admin-image-modal">
                                <div className="admin-image-modal-header">
                                    <h2>Edit Image Details</h2>
                                    <button className="admin-image-close-button" onClick={() => setIsDialogOpen(false)}>
                                        ×
                                    </button>
                                </div>
                                <form onSubmit={handleUpdate} className="admin-image-edit-form">
                                    <div className="admin-image-form-group">
                                        <label htmlFor="admin-image-edit-title">Title</label>
                                        <input id="edit-title" name="title" type="text" defaultValue={editingImage?.title} required />
                                    </div>

                                    <div className="admin-image-form-group">
                                        <label htmlFor="edit-description">Description</label>
                                        <textarea id="edit-description" name="description" defaultValue={editingImage?.description} required />
                                    </div>

                                    <div className="admin-image-form-group">
                                        <label htmlFor="edit-alt">Alt Text</label>
                                        <input id="edit-alt" name="alt" type="text" defaultValue={editingImage?.alt} required />
                                    </div>

                                    <div className="admin-image-modal-actions">
                                        <button type="button" className="admin-image-cancel-button" onClick={() => setIsDialogOpen(false)}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="admin-image-save-button">
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
