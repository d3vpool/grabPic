import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventService } from '@services/event.service';
import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { Card } from '@components/ui/Card';
import { FileUploadBox } from '@components/ui/FileUploadBox';
import { useToast } from '../contexts/ToastContext';

export const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await eventService.createEvent({ title, description, image: image || undefined });
      showToast('Event created successfully!', 'success');
      navigate(`/events/${data.event.id}`);
    } catch (err: any) {
      showToast(err.message || 'Failed to create event', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-[fade-in_0.35s_ease-out]">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Create New Event</h1>
        <p className="text-gray-400">Set up a gallery for your party or gathering.</p>
      </div>

      <Card className="p-6 md:p-8 bg-surface-dark/20 border-white/5">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Event Title"
            placeholder="e.g. Sarah's Birthday Party"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            focus-visible-outline="true"
          />
          
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-gray-300">Description (Optional)</label>
            <textarea
              className="px-4 py-2.5 min-h-[120px] resize-y bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 focus-visible:ring-2 focus-visible:ring-brand-yellow"
              placeholder="Tell people about this event..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 block mb-2">Event Cover Image (Optional)</label>
            {image ? (
              <div className="relative rounded-xl overflow-hidden bg-slate-950 h-48 border border-white/10">
                <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg hover:shadow-red-500/20 transition-all cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ) : (
              <FileUploadBox onFilesSelected={(files) => setImage(files[0])} multiple={false} accept="image/*" />
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="secondary" onClick={() => navigate('/events')} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" isLoading={loading} className="flex-1">
              Create Event
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
